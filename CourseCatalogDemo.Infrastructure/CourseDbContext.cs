﻿using CourseCatalogDemo.Core.Models;
using CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations;
using System;
using System.Data.Entity;
using System.Diagnostics;

namespace CourseCatalogDemo.Infrastructure
{
    public class CourseDbContext : DbContext
    {
        public CourseDbContext() : base("CourseContext")
        {
            Database.Log = msg => Debug.WriteLine(msg);
            Database.SetInitializer<CourseDbContext>(null);
            Configuration.LazyLoadingEnabled = false;
        }

        public static CourseDbContext Create()
        {
            return new CourseDbContext();
        }

        public DbSet<Course> Courses { get; set; }
        public DbSet<CourseView> CourseViews { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
            modelBuilder.Properties<string>().Configure(c => c.HasColumnType("varchar").HasMaxLength(255));
            modelBuilder.Properties<string>();

            modelBuilder.Properties<DateTime>().Configure(c => c.HasColumnType("smalldatetime"));

            modelBuilder.Configurations.Add(new CourseConfiguration());
            modelBuilder.Configurations.Add(new CourseViewConfiguration());
            modelBuilder.Configurations.Add(new SchoolYearConfiguration());
            modelBuilder.Configurations.Add(new GradeConfiguration());
            modelBuilder.Configurations.Add(new CourseTypeConfiguration());
            modelBuilder.Configurations.Add(new CreditTypeConfiguration());
            modelBuilder.Configurations.Add(new ClassTypeConfiguration());
            modelBuilder.Configurations.Add(new DeliveryTypeConfiguration());
            modelBuilder.Configurations.Add(new SubjectAreaConfiguration());

            modelBuilder.Configurations.Add(new CareerTechProgramConfiguration());


        }
    }
}
