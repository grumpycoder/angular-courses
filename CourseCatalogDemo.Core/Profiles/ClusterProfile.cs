using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;

namespace CourseCatalogDemo.Core.Profiles
{
    public class ClusterProfile : Profile
    {
        public ClusterProfile()
        {
            CreateMap<ClusterEditDto, Cluster>();

        }
    }
}
