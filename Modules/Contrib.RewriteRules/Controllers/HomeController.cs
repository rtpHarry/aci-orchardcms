using Orchard.Themes;
using System.Web.Mvc; 

namespace Contrib.RewriteRules.Controllers {
    [Themed]
    public class HomeController : Controller {
        public ActionResult Rewrite(string path) {
            return new HttpNotFoundResult();
        }
    }
}