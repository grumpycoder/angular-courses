using AutoMapper;
using AutoMapper.QueryableExtensions;
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


        [HttpGet, Route("clusters/code/{clusterCode}")]
        public async Task<object> Cluster(string clusterCode)
        {
            var dto = await _context.Clusters.Include(x => x.Programs).FirstOrDefaultAsync(x => x.ClusterCode == clusterCode);
            return Ok(dto);
        }

        [HttpGet, Route("clusters/{id}")]
        public async Task<object> Clusters(int id)
        {
            var dto = await _context.Clusters.Include(x => x.Programs).FirstOrDefaultAsync(x => x.Id == id);
            return Ok(dto);
        }

        [HttpPut, Route("clusters")]
        public async Task<object> Put(ClusterEditDto dto)
        {
            var cluster = await _context.Clusters.FindAsync(dto.Id);

            Mapper.Map(dto, cluster);

            await _context.SaveChangesAsync();

            return Ok(dto);
        }

        [HttpGet, Route("clusters/{clusterCode}/programs")]
        public async Task<object> ClusterPrograms(string clusterCode)
        {
            var dto = await _context.Programs
                .Where(x => x.Cluster.ClusterCode == clusterCode)
                .ProjectTo<ProgramDto>()
                .ToListAsync();
            return Ok(dto);
        }

        [HttpGet, Route("programs")]
        public async Task<object> Programs()
        {
            //var schoolYear = 2017;
            var programs = await _context.Programs
                .Where(x => x.SchoolYear == 2017)
                .ProjectTo<ProgramDto>().ToListAsync();
            return Ok(programs);
        }

        [HttpPut, Route("programs")]
        public async Task<object> Put(Program dto)
        {
            var cluster = await _context.Programs.FindAsync(dto.Id);

            //Mapper.Map(dto, cluster);

            await _context.SaveChangesAsync();

            return Ok(dto);
        }


        [HttpGet, Route("programs/{id}/edit")]
        public async Task<object> GetEditPrograms(int id)
        {
            //var schoolYear = 2017;
            var programs = await _context.Programs
                .Include(x => x.ProgramType)
                .Where(x => x.Id == id).FirstOrDefaultAsync();
            return Ok(programs);
        }

        //[HttpGet, Route("programs/{schoolYear}")]
        //public async Task<object> Programs(int? schoolYear)
        //{
        //    //var schoolYear = 2017;
        //    var programs = await _context.Programs.Where(x => x.SchoolYear == schoolYear).ProjectTo<ProgramDto>().ToListAsync();
        //    return Ok(programs);
        //}

        //[HttpGet, Route("programs/{schoolYear}/{programCode}/courses")]
        //public async Task<object> Courses(int schoolYear, string programCode)
        //{
        //    var program = await _context.Programs.Include(x => x.Courses).FirstOrDefaultAsync(x => x.ProgramCode == programCode && x.SchoolYear == schoolYear);
        //    return Ok(program);
        //}

        //[HttpGet, Route("program/{programCode}/courses")]
        [HttpGet, Route("programs/{programCode}/courses")]
        public async Task<object> Courses(string programCode)
        {

            //var dto = await _courseContext.Courses
            //    .Where(x => x.Programs.Any(c => c.ProgramCode == programCode))
            //    .ProjectTo<CourseDto>().ToListAsync();

            var dto = await _courseContext.Courses
                .Where(x => x.ProgramCourses.Any(c => c.Program.ProgramCode == programCode))
                .ProjectTo<CourseDto>().ToListAsync();

            return Ok(dto);
        }

        //[HttpDelete, Route("programs/{programId}/{courseId}")]
        //public async Task<object> RemoveProgramCourse(int programId, int courseId)

        [HttpDelete, Route("programs/{programId}/{courseId}")]
        public async Task<object> RemoveProgramCourse(int programId, int courseId)
        {

            var link = await _context.ProgramCourses.FirstOrDefaultAsync(x => x.CourseId == courseId && x.ProgramId == programId);

            if (link == null) return NotFound();

            _context.ProgramCourses.Remove(link);

            await _context.SaveChangesAsync();

            return Ok();

        }

        [HttpPost, Route("programs/{programId}/{courseId}")]
        public async Task<object> AddProgramCourse(int programId, int courseId)
        {

            var existing =
                _context.ProgramCourses.Any(x => x.ProgramId == programId && x.CourseId == courseId);

            if (existing) return BadRequest("Course already assigned to program");

            var link = new ProgramCourse()
            {
                CourseId = courseId,
                ProgramId = programId,
                ModifyUser = "mlawrence" //TODO: Get auth user
            };
            _context.ProgramCourses.Add(link);

            await _context.SaveChangesAsync();
            return Ok();

        }
        
        [HttpPut, Route("programs/{programId}/{courseId}")]
        public async Task<object> UpdateProgramCourse(ProgramCourseEditDto dto)
        {

            var existing = await
                _context.ProgramCourses.FirstOrDefaultAsync(x => x.ProgramId == dto.ProgramId && x.CourseId == dto.CourseId);

            if (existing == null) return NotFound();

            existing.IsActive = dto.IsActive;
            existing.IsElective = dto.IsElective;
            existing.IsFoundation = dto.IsFoundation;
            existing.IsRequired = dto.IsRequired;

            _context.ProgramCourses.AddOrUpdate(existing);

            await _context.SaveChangesAsync();
            return Ok();

        }

        [HttpDelete, Route("clusters/{clusterId}/{programId}")]
        public async Task<object> RemoveClusterProgram(int clusterId, int programId)
        {

            var program = await _context.Programs.FirstOrDefaultAsync(x => x.Id == programId);

            if (program == null) return NotFound();

            _context.Programs.Remove(program);

            await _context.SaveChangesAsync();

            return Ok();

        }

    }
}
