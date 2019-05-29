using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Infrastructure;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System.Data.Entity;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper.QueryableExtensions;

namespace CourseCatalogDemo.Web.Controllers.Api
{
    [RoutePrefix("api/courses")]
    public class CourseController : ApiController
    {
        private readonly CourseDbContext _context;

        public CourseController()
        {
            _context = CourseDbContext.Create();
        }

        [HttpGet, Route("")]
        public async Task<object> Get(DataSourceLoadOptions loadOptions)
        {
            var list = await _context.CourseViews.ToListAsync();

            return Ok(DataSourceLoader.Load(list, loadOptions));
        }

        [HttpGet, Route("{id}")]
        public async Task<object> Get(int id)
        {
            //var dto = await _context.Courses.Include(x => x.BeginServiceYear).FirstOrDefaultAsync(c => c.Id == id);
            //var dto = await _context.Courses.FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.CourseViews.FirstOrDefaultAsync(c => c.Id == id);

            return Ok(dto);
        }

        [HttpGet, Route("{id}/full")]
        public async Task<object> GetFull(int id)
        {
            //var dto = await _context.Courses
            //    .Include(x => x.CareerTechPrograms).ProjectTo<CourseDto>()
            //    .FirstOrDefaultAsync(c => c.Id == id);

            var dto = await _context.Courses
                .Include(x => x.ProgramCourses).ProjectTo<CourseDto>()
                .FirstOrDefaultAsync(c => c.Id == id);
            return Ok(dto);
        }

        [HttpGet, Route("{id}/edit")]
        public async Task<object> GetEdit(int id)
        {
            //var dto = await _context.Courses.Include(x => x.BeginServiceYear).FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.Courses.FirstOrDefaultAsync(c => c.Id == id);

            return Ok(dto);
        }

        [HttpGet, Route("{id}/edit/full")]
        public async Task<object> GetEditFull(int id)
        {
            
            //var dto = await _context.Courses.Include(x => x.CareerTechPrograms).FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.Courses.Include(x => x.ProgramCourses).FirstOrDefaultAsync(c => c.Id == id);

            return Ok(dto);
        }

        [HttpGet, Route("view/{id}")]
        public async Task<object> GetCouresView(int id)
        {
            //var dto = await _context.Courses.Include(x => x.BeginServiceYear).FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.CourseViews.FirstOrDefaultAsync(c => c.Id == id);

            return Ok(dto);
        }

        [HttpGet, Route("view/{id}/full")]
        public async Task<object> GetCouresViewFull(int id)
        {
            //var dto = await _context.Courses.Include(x => x.BeginServiceYear).FirstOrDefaultAsync(c => c.Id == id);
            var dto = await _context.CourseViews.FirstOrDefaultAsync(c => c.Id == id);

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
