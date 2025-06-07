using Microsoft.AspNetCore.Mvc;

namespace BudgetExpenseTracker.Controllers
{
    public class BudgetsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
