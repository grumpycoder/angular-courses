using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class ClusterTypeConfiguration : EntityTypeConfiguration<ClusterType>
    {
        public ClusterTypeConfiguration()
        {
            ToTable("ClusterType", "CareerTech");
            Property(s => s.Id).HasColumnName("ClusterTypeId");
            Property(s => s.Name).HasColumnName("ClusterType");
        }
    }
}
