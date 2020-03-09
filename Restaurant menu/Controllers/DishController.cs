using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using System.Collections.Generic;

namespace Restaurant_menu.ControllerBase
{
    [ApiController]
    [Route("api/[controller]")]
    public class DishController : Controller
    {
        public DishController([FromServices] IDishService dishService)
        {
            _dishService = dishService;
        }

        private IDishService _dishService;

        [HttpGet]
        public IActionResult Get()
        {
            List<Dish> dishes = _dishService.GetAll();
            return Json(dishes);
        }

        [HttpPost]
        public IActionResult Update([FromBody] Dish dish)
        {
            _dishService.UpdateDish(dish);
            return Ok();
        }

        [HttpPut]
        public IActionResult Create([FromBody] Dish dish)
        {
            _dishService.CreateDish(dish);
            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] long id)
        {
            _dishService.DeleteDish(id);
            return Ok();
        }
    }
}
