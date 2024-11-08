using ElektroWasserer.Web;
using MediatR;
using System.Reflection;
using Umbraco.Cms.Core.Services;

WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

{
    builder.Services.AddMediatR(cfg => {
        cfg.RegisterServicesFromAssembly(typeof(Program).Assembly);
    });
    builder.Services.AddScoped<PageState>(p => p.GetRequiredService<IMediator>().Send(new PageStateHandler.Request()).GetAwaiter().GetResult());
}

builder.CreateUmbracoBuilder()
    .AddBackOffice()
    .AddWebsite()
    .AddDeliveryApi()
    .AddComposers()
    .Build();

WebApplication app = builder.Build();

await app.BootUmbracoAsync();


app.UseUmbraco()
    .WithMiddleware(u =>
    {
        u.UseBackOffice();
        u.UseWebsite();
    })
    .WithEndpoints(u =>
    {
        u.UseInstallerEndpoints();
        u.UseBackOfficeEndpoints();
        u.UseWebsiteEndpoints();
    });

await app.RunAsync();
