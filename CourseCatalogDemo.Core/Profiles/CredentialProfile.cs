using AutoMapper;
using CourseCatalogDemo.Core.Dtos;
using CourseCatalogDemo.Core.Models;

namespace CourseCatalogDemo.Core.Profiles
{
    public class CredentialProfile : Profile
    {
        public CredentialProfile()
        {
            CreateMap<CredentialEditDto, Credential>();

        }
    }
}
