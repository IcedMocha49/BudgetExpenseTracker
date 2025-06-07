using System.ComponentModel.DataAnnotations;

namespace BudgetExpenseTracker.Models
{
    public class Goal
    {
            public int Id { get; set; }

            [Required]
            [StringLength(100)]
            public string Name { get; set; }

            [Required]
            [Range(0.01, double.MaxValue)]
            public decimal TargetAmount { get; set; }

            [DataType(DataType.Date)]
            public DateTime StartDate { get; set; }

            [DataType(DataType.Date)]
            public DateTime EndDate { get; set; }

            public decimal CurrentAmount { get; set; }

            public string UserId { get; set; }
            public ApplicationUser User { get; set; }
        

    }
}
