using System.Data.Entity;
using PvP.Api.Models;

namespace PvP.Api.Infrastructure
{
    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DbSet<UserState> UserStates { get; set; }

        public DbSet<Card> Cards { get; set; }


        public DataContext() : base("Default") {}
    }
}   