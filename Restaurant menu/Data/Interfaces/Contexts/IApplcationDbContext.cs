using Microsoft.EntityFrameworkCore;
using Restaurant_menu.Models;

namespace Restaurant_menu.Data.Interfaces.Contexts
{
    public class IApplcationDbContext : DbContext
    {
        public DbSet<Dish> Dishes { get; set; }
    }
}
