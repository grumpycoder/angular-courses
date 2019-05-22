﻿using System.Collections.Generic;

namespace CourseCatalogDemo.Core.Models
{
    public class Course
    {
        public int Id { get; set; }
        public string CourseCode { get; set; }
        public string CipCode { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public int? BeginServiceYearId { get; set; }
        public int? EndServiceYearId { get; set; }

        public int? LowGradeId { get; set; }
        public int? HighGradeId { get; set; }
        public int? CourseTypeId { get; set; }
        public int? CreditTypeId { get; set; }
        public int? ClassTypeId { get; set; }
        public int? SubjectAreaId { get; set; }


        public SchoolYear BeginServiceYear { get; set; }
        public SchoolYear EndServiceYear { get; set; }

        public Grade LowGrade { get; set; }
        public Grade HighGrade { get; set; }
        public CourseType CourseType { get; set; }
        public CreditType CreditType { get; set; }
        public ClassType ClassType { get; set; }
        public SubjectArea SubjectArea { get; set; }

        public List<CareerTechProgram> CareerTechPrograms { get; set; }
    }
}
