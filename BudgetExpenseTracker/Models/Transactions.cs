using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BudgetExpenseTracker.Models
{
    public class Transactions
    {
        public int Id { get; set; }
        [Required]
        [Range(0.01, 1000000)]
        public Decimal Amount { get; set; }
        public string Description { get; set; }
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }
        public string UserId { get; set; }
        public ApplicationUser User { get; set; }   

    }
}
