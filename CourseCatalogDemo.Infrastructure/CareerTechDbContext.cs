using CourseCatalogDemo.Core.Models;
using CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations;
using System;
using System.Data.Entity;
using System.Diagnostics;

namespace CourseCatalogDemo.Infrastructure
{
    public class CareerTechDbContext : DbContext
    {
        public CareerTechDbContext() : base("CareerTechContext")
        {
            Database.Log = msg => Debug.WriteLine(msg);
            Database.SetInitializer<CareerTechDbContext>(null);
            Configuration.LazyLoadingEnabled = false;
        }

        public static CareerTechDbContext Create()
        {
            return new CareerTechDbContext();
        }

        public DbSet<CareerTechProgram> CareerTechPrograms { get; set; }
        public DbSet<Cluster> Clusters { get; set; }
        public DbSet<CareerTechProgramCourse> CareerTechProgramCourses { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.Properties<string>().Configure(c => c.HasColumnType("varchar").HasMaxLength(255));
            modelBuilder.Properties<string>();

            modelBuilder.Properties<DateTime>().Configure(c => c.HasColumnType("smalldatetime"));

            modelBuilder.Configurations.Add(new CourseConfiguration());
            modelBuilder.Configurations.Add(new CareerTechProgramConfiguration());
            modelBuilder.Configurations.Add(new ClusterTypeConfiguration());
            modelBuilder.Configurations.Add(new ClusterConfiguration());
            modelBuilder.Configurations.Add(new ProgramTypeConfiguration());
            //modelBuilder.Configurations.Add(new CareerTechProgramCourseConfiguration());
        }
    }
}
