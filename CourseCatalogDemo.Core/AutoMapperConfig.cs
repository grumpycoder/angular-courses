using System.Reflection;
using AutoMapper;
using CourseCatalogDemo.Core;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(AutoMapperConfig), "Configure")]
namespace CourseCatalogDemo.Core
{
    public static class AutoMapperConfig
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfiles(Assembly.GetExecutingAssembly());
                //cfg.ForAllMaps((map, exp) => exp.ForAllOtherMembers(opt => opt.Ignore()));
            });

        }

    }
}
