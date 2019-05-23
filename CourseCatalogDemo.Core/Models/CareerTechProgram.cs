using System.Collections.Generic;

namespace CourseCatalogDemo.Core.Models
{
    public class CareerTechProgram
    {
        public int Id { get; set; }
        public int SchoolYear { get; set; }
        public string ProgramCode { get; set; }
        public string Name { get; set; }

        public List<Course> Courses { get; set; } = new List<Course>();
    }
}
