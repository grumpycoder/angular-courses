using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class SchoolYearConfiguration : EntityTypeConfiguration<SchoolYear>
    {
        public SchoolYearConfiguration()
        {
            ToTable("SchoolYears", "Common");
            Property(s => s.Id).HasColumnName("SchoolYearId");
            Property(s => s.DisplayYear).HasColumnName("SchoolYear");
            Property(s => s.Year).HasColumnName("ShortSchoolYear");
        }
    }
}
