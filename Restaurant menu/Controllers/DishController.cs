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
        public DishController([FromServices] IDishService dishService,
            [FromServices] IApplcationDbContext applcationDbContext)
        {
            _dishService = dishService;
            _applcationDbContext = applcationDbContext;
        }

        private IDishService _dishService;
        private IApplcationDbContext _applcationDbContext;

        [HttpGet]
        public IActionResult Get(string fieldSortName)
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
