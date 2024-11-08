using MediatR;
using Umbraco.Cms.Core.Models;
using Umbraco.Cms.Core.Models.PublishedContent;
using Umbraco.Cms.Core.Web;

namespace ElektroWasserer.Web
{
    public class PageStateHandler : IRequestHandler<PageStateHandler.Request, PageState>
    {
        private readonly IUmbracoContextAccessor _umbracoContextAccessor;
        public PageStateHandler(IUmbracoContextAccessor umbracoContextAccessor)
        {
            _umbracoContextAccessor = umbracoContextAccessor;
        }

        public class Request : IRequest<PageState>
        {
        }
        public async Task<PageState> Handle(Request message, CancellationToken cancellationToken)
        {
            if (!_umbracoContextAccessor.TryGetUmbracoContext(out var umbracoContext))
            {
                throw new NullReferenceException("UmbracoContext is null");
            }

            var language = umbracoContext.PublishedRequest?.Culture is { } culture
                ? culture[..2] switch
                {
                    "de" => new Language("de", "German"),
                    "it" => new Language("it", "Italian"),
                    "en" => new Language("en", "English"),
                    _ => new Language("en", "English")
                }
                : new Language("de", "German");

            var pageState = new PageState
            {
                Language = language,
                Page = umbracoContext.PublishedRequest?.PublishedContent
            };

            return await Task.FromResult(pageState); // Return as a completed task
        }
    }

    public class PageState
    {
        public Language? Language { get; set; }
        public IPublishedContent? Page { get; set; }
    }
}