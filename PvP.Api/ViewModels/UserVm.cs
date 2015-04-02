using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using PvP.Api.Infrastructure.ValidationAttributes;
using PvP.Api.Models;

namespace PvP.Api.ViewModels
{
    [NotMapped]
    public class UserVm : User
    {
        [Compare("Password")]
        public string ConfirmPassword { get; set; }

        [True(ErrorMessage = "Terms should be accepted")]
        public bool TermsAccepted { get; set; }
    }
}