using System.ComponentModel.DataAnnotations;

namespace PvP.Api.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; } 

        [Required]
        public string FirstName { get; set; } 

        [Required]
        public string LastName { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 3)]
        public string DisplayName { get; set; }

        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        [DataType(DataType.Password)]
        [StringLength(16, MinimumLength = 8)]
        public string Password { get; set; }
    }
}