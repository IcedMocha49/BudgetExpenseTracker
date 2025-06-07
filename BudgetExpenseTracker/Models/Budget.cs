using System;
using System.ComponentModel.DataAnnotations;

namespace BudgetExpenseTracker.Models
{
    public class Budget
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Category is required.")]
        public int CategoryId { get; set; }

        public required Category Category { get; set; }

        [Required(ErrorMessage = "Amount limit is required.")]
        [Range(0.01, 1_000_000, ErrorMessage = "Amount must be greater than zero.")]
        public decimal AmountLimit { get; set; }

        [Required(ErrorMessage = "Month is required.")]
        [Range(1, 12, ErrorMessage = "Month must be between 1 and 12.")]
        public int Month { get; set; }

        [Required(ErrorMessage = "Year is required.")]
        [Range(2000, 2100, ErrorMessage = "Year must be between 2000 and 2100.")]
        public int Year { get; set; }

        [Required]
        public required string UserId { get; set; }

        public required ApplicationUser User { get; set; }
    }
}

