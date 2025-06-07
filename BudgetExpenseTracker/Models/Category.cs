using System.ComponentModel.DataAnnotations;

namespace BudgetExpenseTracker.Models
{
    public class Category
    {
        //make category table something only the admin can add
        //user can select a category from a pre selected list 
        public int Id { get; set; }
        [Required]
        [StringLength(100)]
        public required string Name { get; set; }
        //public required string UserId { get; set; }
      //  public required ApplicationUser User { get; set; }
      //  public required ICollection<Transactions> Transactions { get; set; }

    }
}
