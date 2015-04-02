using System;
using System.ComponentModel.DataAnnotations;

namespace PvP.Api.Models
{
    public class Card
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int UserId { get; set; }

        public User User { get; set; }

        [Required]
        public string Word { get; set; }

        [Required]
        public string Translation { get; set; }
        
        [Required]
        public string ImageUrlsString { get; set; }
    }
}