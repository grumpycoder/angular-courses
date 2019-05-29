using System.Collections.Generic;

namespace CourseCatalogDemo.Core.Models
{
    public class Credential
    {
        public int Id { get; set; }
        public string CredentialCode { get; set; }
        public string Name { get; set; }

        public int CredentialTypeId { get; set; }

        public CredentialType CredentialType { get; set; }

        public bool IsReimbursable { get; set; }

        public List<Program> Programs { get; set; }
    }
}
