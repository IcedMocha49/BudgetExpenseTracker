using BudgetExpenseTracker.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace BudgetExpenseTracker.Controllers
{
    public class CategoryController : Controller
    {
        private readonly ICategoryRepository _categoryRepository;

        public CategoryController (ICategoryRepository categoryRepository)
        {
            _categoryRepository = categoryRepository;   
        }
        [HttpGet]
        public async Task<IActionResult> GetCategories()
        {
            var categories = await _categoryRepository.GetAllCategoriesAsync();
            return Json(categories);
        }

    }
}
