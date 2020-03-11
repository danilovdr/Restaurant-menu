using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces.Contexts;
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

        public IApplcationDbContext ApplcationDbContext { get; }

        [HttpGet]
        public IActionResult Get(string fieldNameSort, bool ascending)
        {
            List<Dish> dishes = _dishService.GetAll();
            if (fieldNameSort != null)
            {
                dishes = _dishService.SortByField(dishes, fieldNameSort, ascending);
            }

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
