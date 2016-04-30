using System;
using System.Linq;
using System.Web.Mvc;
using System.Web.Routing;
using Orchard;
using Orchard.Mvc.Filters;

namespace MetroMan.Filters {
  public class LayoutFilter : FilterProvider, IResultFilter {
    private readonly IWorkContextAccessor _wca;


    public LayoutFilter(IWorkContextAccessor wca) {
      _wca = wca;
    }

    public void OnResultExecuting(ResultExecutingContext filterContext) {
      WorkContext workContext = _wca.GetContext();
      RouteValueDictionary routeValues = filterContext.RouteData.Values;

      string area = workContext.HttpContext.Request.Path.ToLower();

      switch (area) {
        case "/":
        case "/pricing":
        case "/purchase":
        case "/about":
          workContext.Layout.Metadata.Alternates.Add("Layout__FullControl");
          break;
      }
    }
    
    public void OnResultExecuted(ResultExecutedContext filterContext) { }
  }
}