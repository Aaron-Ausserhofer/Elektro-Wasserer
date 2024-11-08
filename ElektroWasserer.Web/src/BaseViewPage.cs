using Microsoft.AspNetCore.Mvc.Razor.Internal;
using Umbraco.Cms.Web.Common.PublishedModels;
using Umbraco.Cms.Web.Common.Views;

namespace ElektroWasserer.Web
{
    public abstract class EwUmbracoViewPage : EwUmbracoViewPage<IPage>
    {
    }

    public abstract class EwUmbracoViewPage<TModel> : UmbracoViewPage<TModel>
    {

        [RazorInject]
        public IHttpContextAccessor HttpContextAccessor { get; set; } = null!;

        [RazorInject]
        public PageState PageState { get; set; } = null!;
    }
}