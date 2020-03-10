using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Restaurant_menu.Data.Interfaces.Contexts;

namespace Restaurant_menu.Data
{
    public class ApplicationDbContext : IApplcationDbContext
    {
        public ApplicationDbContext([FromServices] IConfiguration configuration)
        {
            _configuration = configuration;
            Database.EnsureCreated();
        }

        private IConfiguration _configuration;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            string connectionString = _configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlite(connectionString);
        }
    }
}
