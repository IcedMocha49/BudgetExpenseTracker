using Microsoft.AspNetCore.Identity.UI.Services;
using System.Threading.Tasks;

namespace BudgetExpenseTracker.Services
{
    public class EmailSender : IEmailSender
    {
        public Task SendEmailAsync(string email, string subject, string htmlMessage)
        {
            // Simulate sending an email
            Console.WriteLine($"Sending email to: {email}");
            Console.WriteLine($"Subject: {subject}");
            Console.WriteLine($"Body: {htmlMessage}");

            return Task.CompletedTask;
        }
    }
}
