using System.Collections.Generic;

namespace CourseCatalogDemo.Core.Models
{
    public class CareerTechProgram
    {
        public int Id { get; set; }
        public int SchoolYear { get; set; }
        public string ProgramCode { get; set; }
        public string Name { get; set; }
        public int? BeginYear { get; set; }
        public int? EndYear { get; set; }

        public int? ClusterId { get; set; }
        public Cluster Cluster { get; set; }
        public List<Course> Courses { get; set; } = new List<Course>();
    }
}
