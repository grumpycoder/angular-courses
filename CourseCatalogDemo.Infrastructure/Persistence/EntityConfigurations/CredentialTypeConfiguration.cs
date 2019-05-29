using CourseCatalogDemo.Core.Models;
using System.Data.Entity.ModelConfiguration;

namespace CourseCatalogDemo.Infrastructure.Persistence.EntityConfigurations
{
    public class CredentialTypeConfiguration : EntityTypeConfiguration<CredentialType>
    {
        public CredentialTypeConfiguration()
        {
            ToTable("CredentialType", "CareerTech");
            Property(s => s.Id).HasColumnName("CredentialTypeId");
            Property(s => s.Name).HasColumnName("CredentialType");
        }
    }
}
