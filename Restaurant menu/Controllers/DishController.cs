using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data;
using Restaurant_menu.Models;
using System.IO;

namespace Restaurant_menu.Controllers
{
    public class DishController : Controller
    {
        private ApplicationDbContext _dbContext;

        public DishController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public IActionResult Add(Dish dish)
        {
            return Ok();
        }
    }
}
