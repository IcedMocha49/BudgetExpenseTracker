using BudgetExpenseTracker.Interfaces;
using BudgetExpenseTracker.Models;
using Microsoft.EntityFrameworkCore;

namespace BudgetExpenseTracker.Repositories
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly ApplicationDbContext _context;

        public CategoryRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public Category GetCategoryById(int id)
        {
            return _context.Categories.FirstOrDefault();
        }
        public async Task<IEnumerable<Category>> GetAllCategoriesAsync()
        {
            return await _context.Categories.ToListAsync();
        }
    }
}
