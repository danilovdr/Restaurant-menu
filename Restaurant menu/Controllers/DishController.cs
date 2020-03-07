using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data;
using Restaurant_menu.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant_menu.ControllerBase
{
    [ApiController]
    [Route("api/[controller]")]
    public class DishController : Controller
    {
        private ApplicationDbContext _dbContext;

        public DishController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public IActionResult Get()
        {
            List<Dish> dishes = _dbContext.Dishes.ToList();
            return Json(dishes);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Dish dish)
        {
            dish.Adding = DateTime.Now;
            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public IActionResult Update([FromBody] Dish dish)
        {
            Dish changedDish = _dbContext.Dishes.FirstOrDefault(p => p.Id == dish.Id);

            if (changedDish == null)
            {
                return NotFound();
            }
            else
            {
                _dbContext.Update(dish);
                return Ok();
            }
        }

        [HttpDelete]
        public IActionResult Delete(long id)
        {
            Dish deleteDish = _dbContext.Dishes.FirstOrDefault(p => p.Id == id);

            if (deleteDish != null)
            {
                _dbContext.Dishes.Remove(deleteDish);
                return Ok();
            }

            return NotFound();
        }
    }
}
