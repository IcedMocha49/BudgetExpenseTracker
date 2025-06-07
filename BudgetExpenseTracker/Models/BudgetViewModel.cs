using Microsoft.AspNetCore.Mvc.Rendering;
using System.ComponentModel.DataAnnotations;

namespace BudgetExpenseTracker.Models
{

    public class BudgetViewModel
    {
        public int Id { get; set; }

        [Required]
        public int CategoryId { get; set; }

        public IEnumerable<SelectListItem> Categories { get; set; } = [];

        [Required]
        [Range(0.01, 1_000_000)]
        public decimal AmountLimit { get; set; }

        [Required]
        [Range(1, 12)]
        public int Month { get; set; }

        [Required]
        [Range(2000, 2100)]
        public int Year { get; set; }
    }
}
