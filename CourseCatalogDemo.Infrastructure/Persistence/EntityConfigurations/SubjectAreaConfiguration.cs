﻿using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class SubjectAreaConfiguration : EntityTypeConfiguration<SubjectArea>
    {
        public SubjectAreaConfiguration()
        {
            ToTable("CourseSubjectArea", "Common");
            Property(s => s.Id).HasColumnName("CourseSubjectAreaId");
            Property(s => s.Name).HasColumnName("CourseSubjectArea");
            Property(s => s.Code).HasColumnName("CourseSubjectAreaCode");
        }
    }
}
