using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;
using CourseCatalogDemo.Infrastructure;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;

namespace CourseCatalogDemo.Web.Controllers.Api
{
    [RoutePrefix("api/careertech")]
    public class CareerTechController : ApiController
    {
        private readonly CareerTechDbContext _context;

        public CareerTechController()
        {
            _context = CareerTechDbContext.Create();
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
    }
}
