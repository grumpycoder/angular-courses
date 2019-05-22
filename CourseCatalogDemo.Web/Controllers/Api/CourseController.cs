using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Infrastructure;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Http;

namespace CourseCatalogDemo.Web.Controllers.Api
{
    [RoutePrefix("api/course")]
    public class CourseController : ApiController
    {
        private readonly CourseDbContext _context;

        public CourseController()
        {
            _context = CourseDbContext.Create();
        }

        [HttpGet]
        public async Task<object> Get(DataSourceLoadOptions loadOptions)
        {
            var list = await _context.CourseViews.ToListAsync();

            return Ok(DataSourceLoader.Load(list, loadOptions));
        }

        [HttpGet, Route("{id}")]
        public async Task<object> Get(int id)
        {
            //var dto = await _context.Courses.Include(x => x.BeginServiceYear).FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.Courses.Include(x => x.CareerTechPrograms).FirstOrDefaultAsync(c => c.Id == id);

            return Ok(dto);
        }

        [HttpPost]
        public async Task<object> Put(CourseEditDto dto)
        {
            var course = await _context.Courses.FindAsync(dto.Id);

            Mapper.Map(dto, course);

            _context.SaveChanges();

            return Ok(dto);
        }
    }
}
