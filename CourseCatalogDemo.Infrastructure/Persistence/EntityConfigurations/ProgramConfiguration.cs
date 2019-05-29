using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class ProgramConfiguration : EntityTypeConfiguration<Program>
    {
        public ProgramConfiguration()
        {
            ToTable("Program", "CareerTech");
            Property(s => s.Id).HasColumnName("ProgramId");
            Property(s => s.Name).HasColumnName("Program");

            //HasMany<ProgramCredential>(s => s.Credentials)
            //    .WithMany(c => c.Programs)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CredentialId");
            //        x.ToTable("ProgramCredential", "CareerTech");
            //    });


            //HasMany<Credential>(s => s.Credentials)
            //    .WithMany(c => c.Programs)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CredentialId");
            //        x.ToTable("ProgramCredential", "CareerTech");
            //    });

            //HasMany<Course>(s => s.Courses)
            //    .WithMany(c => c.Programs)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CourseId");
            //        x.ToTable("ProgramCourse", "CareerTech");
            //    });

            //HasMany<ProgramCourse>(s => s.ProgramCourses)
            //    .WithMany(c => c.Programs)
            //    .Map(x =>
            //    {
            //        x.MapLeftKey("ProgramId");
            //        x.MapRightKey("CourseId");
            //        x.ToTable("ProgramCourse", "CareerTech");
            //    });

        }
    }
}
