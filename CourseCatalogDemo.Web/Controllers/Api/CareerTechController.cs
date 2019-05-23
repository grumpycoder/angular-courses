using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;
using CourseCatalogDemo.Infrastructure;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace CourseCatalogDemo.Web.Controllers.Api
{
    [RoutePrefix("api/careertech")]
    public class CareerTechController : ApiController
    {
        private readonly CareerTechDbContext _context;
        private readonly CourseDbContext _courseContext;

        public CareerTechController()
        {
            _context = CareerTechDbContext.Create();
            _courseContext = CourseDbContext.Create();
        }

        [HttpGet, Route("clusters/{year:int?}")]
        public async Task<object> Clusters(DataSourceLoadOptions loadOptions, int? year = null)
        {
            List<Cluster> list = new List<Cluster>();
            if (year == null) list = await _context.Clusters.ToListAsync();
            if (year != null) list = await _context.Clusters.Where(x => x.BeginYear <= year && x.EndYear >= year)
                 .ToListAsync();

            return Ok(DataSourceLoader.Load(list, loadOptions));
        }


        [HttpGet, Route("cluster/{id}")]
        public async Task<object> Cluster(int id)
        {
            var dto = await _context.Clusters.FirstOrDefaultAsync(x => x.Id == id);
            return Ok(dto);
        }

        [HttpPut, Route("cluster")]
        public async Task<object> Put(ClusterEditDto dto)
        {
            var cluster = await _context.Clusters.FindAsync(dto.Id);

            Mapper.Map(dto, cluster);

            await _context.SaveChangesAsync();

            return Ok(dto);
        }

        [HttpGet, Route("programs/{schoolYear}")]
        public async Task<object> Programs(int? schoolYear)
        {
            //var schoolYear = 2017;
            var programs = await _context.CareerTechPrograms.Where(x => x.SchoolYear == schoolYear).ToListAsync();
            return Ok(programs);
        }

        [HttpGet, Route("programs/{schoolYear}/{programCode}/courses")]
        public async Task<object> Courses(int schoolYear, string programCode)
        {
            var program = await _context.CareerTechPrograms.Include(x => x.Courses).FirstOrDefaultAsync(x => x.ProgramCode == programCode && x.SchoolYear == schoolYear);
            return Ok(program);
        }

        //[HttpDelete, Route("programs/{programId}/{courseId}")]
        //public async Task<object> RemoveProgramCourse(int programId, int courseId)
        [HttpDelete, Route("programs/{programId}/{courseId}")]
        public async Task<object> RemoveProgramCourse(int programId, int courseId)
        {

            var link = await _context.CareerTechProgramCourses.FirstOrDefaultAsync(x => x.CourseId == courseId && x.ProgramId == programId);

            if (link == null) return NotFound();

            _context.CareerTechProgramCourses.Remove(link);

            await _context.SaveChangesAsync();

            return Ok();

        }

        [HttpPost, Route("programs/{programId}/{courseId}")]
        public async Task<object> AddProgramCourse(int programId, int courseId)
        {

            var existing =
                _context.CareerTechProgramCourses.Any(x => x.ProgramId == programId && x.CourseId == courseId);

            if (existing) return BadRequest("Course already assigned to program");

            var link = new CareerTechProgramCourse()
            {
                CourseId = courseId,
                ProgramId = programId,
                ModifyUser = "mlawrence" //TODO: Get auth user
            };
            _context.CareerTechProgramCourses.Add(link);

            await _context.SaveChangesAsync();
            return Ok();

        }

        [HttpPut, Route("programs/{programId}/{courseId}")]
        public async Task<object> UpdateProgramCourse(ProgramCourseEditDto dto)
        {

            var existing = await
                _context.CareerTechProgramCourses.FirstOrDefaultAsync(x => x.ProgramId == dto.ProgramId && x.CourseId == dto.CourseId);

            if (existing == null) return NotFound();

            existing.IsActive = dto.IsActive; 
            existing.IsElective = dto.IsElective; 
            existing.IsFoundation = dto.IsFoundation; 
            existing.IsRequired = dto.IsRequired; 

            _context.CareerTechProgramCourses.AddOrUpdate(existing);

            await _context.SaveChangesAsync();
            return Ok();

        }

    }
}
