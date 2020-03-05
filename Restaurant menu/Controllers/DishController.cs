using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data;
using Restaurant_menu.Models;
using System;
using System.Linq;

namespace Restaurant_menu.Controllers
{
    public class DishController : Controller
    {
        private ApplicationDbContext _dbContext;

        public DishController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPut]
        public IActionResult Index([FromBody] Dish dish)
        {
            dish.Adding = DateTime.Now;

            if (_dbContext.Dishes.FirstOrDefault(p => p.Name == dish.Name) == null)
            {
                _dbContext.Dishes.Add(dish);
                return Ok();
            }

            return null;
        }

        [HttpDelete]
        public IActionResult Index([FromBody] Dish dish)
        {
            Dish deleteDish = _dbContext.Dishes.FirstOrDefault(p => p.Name == dish.Name &&
            p.Description == dish.Description && p.Cost == dish.Cost && p.Weight == dish.Weight &&
            p.Calories == dish.Calories);

            if (deleteDish != null) { 
                _dbContext.Dishes.Remove(deleteDish);
                return Ok();
            }

            return null;
        }
    }
}
