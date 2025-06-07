using BudgetExpenseTracker.Models;

namespace BudgetExpenseTracker.Interfaces
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Category>> GetAllCategoriesAsync();
    }
}
