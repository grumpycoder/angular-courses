using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class CareerTechProgramConfiguration : EntityTypeConfiguration<CareerTechProgram>
    {
        public CareerTechProgramConfiguration()
        {
            ToTable("Program", "CareerTech");
            Property(s => s.Id).HasColumnName("ProgramId");
            Property(s => s.Name).HasColumnName("Program");


            //HasMany<Course>(s => s.Courses)
            //    .WithMany(c => c.CareerTechPrograms)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CourseId");
            //        x.ToTable("ProgramCourse", "CareerTech");
            //    });

            //HasMany<CareerTechProgramCourse>(s => s.CareerTechProgramCourses)
            //    .WithMany(c => c.CareerTechPrograms)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CourseId");
            //        x.ToTable("ProgramCourse", "CareerTech");
            //    });
 
        }
    }
}
