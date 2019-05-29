﻿using System.Collections.Generic;

namespace CourseCatalogDemo.Core.Models
{
    public class Program
    {
        public int Id { get; set; }
        public int SchoolYear { get; set; }
        public string ProgramCode { get; set; }
        public string Name { get; set; }
        public int? BeginYear { get; set; }
        public int? EndYear { get; set; }

        public ProgramType ProgramType { get; set; }
        public int? ProgramTypeId { get; set; }

        public int? ClusterId { get; set; }
        public Cluster Cluster { get; set; }
        public List<Course> Courses { get; set; } = new List<Course>();

        public List<ProgramCourse> ProgramCourses { get; set; }

        public List<ProgramCredential> Credentials { get; set; }
    }
}
