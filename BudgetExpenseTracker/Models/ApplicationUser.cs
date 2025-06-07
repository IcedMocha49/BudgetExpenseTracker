using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace BudgetExpenseTracker.Models
{
    public class ApplicationUser : IdentityUser
    {
        //add navigation collections ?

        // public ICollection<Expense> Expenses { get; set; }
        // public ICollection<Budget> Budget { get; set; }


        [MaxLength(100)]
        public string FirstName { get; set; }

        [MaxLength(100)]
        public string LastName { get; set; }
    }
}
