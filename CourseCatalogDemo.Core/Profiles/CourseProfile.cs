using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;

namespace CourseCatalogDemo.Core.Profiles
{
    public class CourseProfile : Profile
    {
        public CourseProfile()
        {
            
            CreateMap<CourseEditDto, Course>()
                .ForMember(d => d.BeginServiceYearId, opt => opt.MapFrom(s => s.BeginServiceYearId))
                .ForMember(d => d.EndServiceYearId, opt => opt.MapFrom(s => s.EndServiceYearId))
                .ForMember(d => d.LowGradeId, opt => opt.MapFrom(s => s.LowGradeId))
                .ForMember(d => d.HighGradeId, opt => opt.MapFrom(s => s.HighGradeId))
                ;

        }
    }
}
