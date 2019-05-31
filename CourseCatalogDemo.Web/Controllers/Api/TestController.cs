using AutoMapper;
using AutoMapper.QueryableExtensions;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;
using CourseCatalogDemo.Infrastructure;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace CourseCatalogDemo.Web.Controllers.Api
{

    [RoutePrefix("api/test")]
    public class TestController : ApiController
    {
        private readonly CareerTechDbContext _context;
        private readonly CourseDbContext _courseContext;

        public TestController()
        {
            _context = CareerTechDbContext.Create();
            _courseContext = CourseDbContext.Create();
        }

        [HttpGet, Route("clusters")]
        public async Task<object> Clusters(DataSourceLoadOptions loadOptions)
        {
            int year = 2017;
            var list = await _context.Clusters.Where(x => x.BeginYear <= year && x.EndYear >= year)
                .ToListAsync();

            return Ok(DataSourceLoader.Load(list, loadOptions));
        }

        [HttpGet, Route("clusters/full")]
        public async Task<object> ClustersFull(DataSourceLoadOptions loadOptions)
        {
            int year = 2017;
            var list = await _context.Clusters
                .Include(x => x.Programs)
                .Where(x => x.BeginYear <= year && x.EndYear >= year)
                .ToListAsync();

            return Ok(DataSourceLoader.Load(list, loadOptions));
        }

        [HttpGet, Route("clusters/{clusterCode}/edit")]
        public async Task<object> ClusterEdit(string clusterCode)
        {
            var cluster = await _context.Clusters.FirstOrDefaultAsync(x => x.ClusterCode == clusterCode);

            var dto = Mapper.Map<ClusterEditDto>(cluster);
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

        [HttpGet, Route("programs/")]
        public async Task<object> Programs()
        {
            var dto = await _context.Programs
                .ProjectTo<ProgramDto>()
                .ToListAsync();

            return Ok(dto);
        }

        [HttpGet, Route("programs/{programCode}")]
        public async Task<object> Programs(string programCode)
        {
            var dto = await _context.Programs
                .Where(x => x.ProgramCode == programCode)
                .ProjectTo<ProgramDto>()
                .ToListAsync();

            return Ok(dto);
        }

        [HttpGet, Route("programs/{programCode}/full")]
        public async Task<object> ProgramsFull(string programCode)
        {
            var dto = await _context.Programs
                .Include(c => c.Credentials)
                .Where(x => x.ProgramCode == programCode)
                .ProjectTo<ProgramDto>()
                .ToListAsync();

            return Ok(dto);
        }

        [HttpGet, Route("programs/{programCode}/courses")]
        public async Task<object> ProgramCourses(string programCode)
        {
            //var dto = await _courseContext.Courses
            //    .Where(x => x.Programs.Any(p => p.ProgramCode == programCode))
            //    .ProjectTo<CourseDto>()
            //    .ToListAsync();
            var dto = await _courseContext.Courses
                .Where(x => x.ProgramCourses.Any(p => p.Program.ProgramCode == programCode))
                .ProjectTo<CourseDto>()
                .ToListAsync();
            return Ok(dto);
        }


        [HttpGet, Route("programs/{programCode}/edit")]
        public async Task<object> ProgramEdit(string programCode)
        {
            var program = await _context.Programs.FirstOrDefaultAsync(x => x.ProgramCode == programCode);

            var dto = Mapper.Map<ProgramEditDto>(program);

            return Ok(dto);
        }

        [HttpPut, Route("programs")]
        public async Task<object> Put(ProgramEditDto dto)
        {
            var program = await _context.Programs.FindAsync(dto.Id);

            Mapper.Map(dto, program);

            await _context.SaveChangesAsync();

            return Ok(dto);
        }

        [HttpPost, Route("programs/{programCode}/{courseCode}")]
        public async Task<object> AddProgramCourse(ProgramCourseEditDto dto)
        {
            //var program = _context.Programs.Include(c => c.ProgramCourses).FirstOrDefault(x => x.Id == dto.ProgramId);
            var program = _context.Programs.Include(c => c.ProgramCourses).FirstOrDefault(x => x.Id == dto.ProgramId);
            if (program == null) return NotFound();



            program.ProgramCourses.Add(new ProgramCourse()
            {
                CourseId = dto.CourseId,
                ProgramId = dto.ProgramId,
                IsActive = dto.IsActive,
                IsElective = dto.IsElective,
                IsFoundation = dto.IsFoundation,
                IsRequired = dto.IsRequired,
                ModifyUser = "mlawrence"
            });

            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete, Route("programs/{programCode}/{courseCode}")]
        public async Task<object> RemoveProgramCourse(string programCode, string courseCode)
        {
            var d = _context.ProgramCourses.FirstOrDefault(x =>
                x.Course.CourseCode == courseCode && x.Program.ProgramCode == programCode);

            if (d == null) return NotFound();

            _context.ProgramCourses.Remove(d);

            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet, Route("credentials")]
        public async Task<object> Credentials()
        {
            var dto = await _context.Credentials.ToListAsync();

            return Ok(dto);
        }

        [HttpGet, Route("credentials/{credentialCode}/edit")]
        public async Task<object> CredentialEdit(string credentialCode)
        {
            var credential = await _context.Credentials.FirstOrDefaultAsync(x => x.CredentialCode == credentialCode);

            var dto = Mapper.Map<CredentialEditDto>(credential);
            return Ok(dto);
        }

        [HttpPut, Route("credentials")]
        public async Task<object> Put(CredentialEditDto dto)
        {
            var credential = await _context.Credentials.FindAsync(dto.Id);

            Mapper.Map(dto, credential);

            await _context.SaveChangesAsync();

            return Ok(dto);
        }

        [HttpPost, Route("credentials/{programCode}")]
        public async Task<object> AddCredential(string programCode, ProgramCredentialEditDto dto)
        {
            var program = _context.Programs.Include(c => c.Credentials)
                .FirstOrDefault(x => x.ProgramCode == programCode);

            var credential = await _context.Credentials.FirstOrDefaultAsync(x => x.Id == dto.CredentialId);

            if (program == null) return NotFound();

            program.Credentials.Add(new ProgramCredential()
            {
                ProgramId = dto.ProgramId,
                CredentialId = dto.CredentialId,
                ModifiyUser = "mlawrence"
            });

            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete, Route("credentials/{programCode}/{credentialCode}")]
        public async Task<object> RemoveCredential(string programCode, string credentialCode)
        {
            var d = _context.Programs.Include(x => x.Credentials).FirstOrDefault(x =>
                x.ProgramCode == programCode);

            var c = _context.ProgramCredentials
                .Where(x => x.Program.ProgramCode == programCode && x.Credential.CredentialCode == credentialCode);


            if (d == null) return NotFound();

            _context.ProgramCredentials.RemoveRange(c);


            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
