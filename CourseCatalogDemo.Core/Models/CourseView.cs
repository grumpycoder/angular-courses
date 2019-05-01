namespace CourseCatalogDemo.Core.Models
{
    public class CourseView
    {
        public int Id { get; set; }
        public string CourseCode { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string CipCode { get; set; }
        public string BeginServiceYear { get; set; }
        public string EndServiceYear { get; set; }

        public string CreditType { get; set; }
        public string CourseType { get; set; }
        public string ClassType { get; set; }
        public string SubjectArea { get; set; }
        public string Status { get; set; }

        //public int? BeginServiceYearId { get; set; }
        //public int? EndServiceYearId { get; set; }

        //public int? CreditTypeId { get; set; }
        //public int? CourseTypeId { get; set; }
        //public int? ClassTypeId { get; set; }
        //public int? SubjectAreaId { get; set; }
    }
}
