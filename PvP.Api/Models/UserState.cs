using System;
using System.ComponentModel.DataAnnotations;

namespace PvP.Api.Models
{
    public class UserState
    {
        [Key]
        public int Id { get; set; }

        public int UserId { get; set; }

        public User User { get; set; }

        public Guid Guid { get; set; }

        public DateTime LastLogIn { get; set; }
    }
}