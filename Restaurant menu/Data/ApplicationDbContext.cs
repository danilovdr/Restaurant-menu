using Microsoft.EntityFrameworkCore;
using Restaurant_menu.Models;

namespace Restaurant_menu.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Dish> Dishes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<IngredientDish> IngredientsDishes { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> dbContextOptions)
            :base(dbContextOptions)
        {
            Database.EnsureCreated();
        }
    }
}
