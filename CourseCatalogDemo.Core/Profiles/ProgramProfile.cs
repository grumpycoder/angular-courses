using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;

namespace CourseCatalogDemo.Core.Profiles
{
    public class ProgramProfile : Profile
    {
        public ProgramProfile()
        {
            CreateMap<CareerTechProgram, ProgramDto>()
                .ForMember(d => d.ProgramId, opt => opt.MapFrom(src => src.Id))
                .ForMember(d => d.ClusterId, opt => opt.MapFrom(src => src.Cluster.Id))
                .ForMember(d => d.ProgramName, opt => opt.MapFrom(src => src.Name))
                .ForMember(d => d.ProgramCode, opt => opt.MapFrom(src => src.ProgramCode))
                .ForMember(d => d.ClusterCode, opt => opt.MapFrom(src => src.Cluster.ClusterCode))
                .ForMember(d => d.ClusterName, opt => opt.MapFrom(src => src.Cluster.Name))
                ;

            CreateMap<ProgramEditDto, CareerTechProgram>();

        }

    }
}
