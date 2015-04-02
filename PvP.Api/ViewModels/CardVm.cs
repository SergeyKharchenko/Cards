using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PvP.Api.ViewModels
{
    [NotMapped]
    public class CardVm
    {
        [Required]
        public int UserId { get; set; }

        [Required]
        public string Word { get; set; }

        [Required]
        public string Translation { get; set; }

        [Required]
        public string[] ImageUrls { get; set; }
    }
}