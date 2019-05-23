namespace CourseCatalogDemo.Core.Models
{
    public class CareerTechProgramCourse
    {
        public int Id { get; set; }
        public int ProgramId { get; set; }
        public int CourseId { get; set; }

        public bool? IsFoundation { get; set; }
        public bool? IsRequired { get; set; }
        public bool? IsElective { get; set; }
        public bool? IsActive { get; set; }

        public string ModifyUser { get; set; }

    }
}
