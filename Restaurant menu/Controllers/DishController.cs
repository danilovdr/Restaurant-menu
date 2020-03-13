using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;

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
        public IActionResult Get([FromQuery] ViewReceiveData data)
        {
            List<Dish> dishes = _dishService.GetAll();

            if (data.FieldNameSort != null) dishes = _dishService.SortByFieldName(data.FieldNameSort, data.SortByAscending);

            List<Dish> filterDishes;

            if (data.FilterName != null)
            {
                filterDishes = _dishService.FilterByName(data.FilterName);
                dishes = dishes.Intersect(filterDishes).ToList();
            }

            if (data.FilterMinCost != null || data.FilterMaxCost != null)
            {
                int minCost = data.FilterMinCost ?? default;
                int maxCost = data.FilterMaxCost ?? default;
                filterDishes = _dishService.FilterByCost(minCost, maxCost);
                dishes = dishes.Intersect(filterDishes).ToList();
            }

            if (data.FilterMinWeight != null || data.FilterMaxWeight != null)
            {
                int minWeight = data.FilterMinWeight ?? default;
                int maxWeight = data.FilterMaxWeight ?? default;
                filterDishes = _dishService.FilterByWeight(minWeight, maxWeight);
                dishes = dishes.Intersect(filterDishes).ToList();
            }

            if (data.FilterMinCalories != null || data.FilterMaxCalories != null)
            {
                int minCalories = data.FilterMinCalories ?? default;
                int maxCalories = data.FilterMaxCalories ?? default;
                filterDishes = _dishService.FilterByCalories(minCalories, maxCalories);
                dishes = dishes.Intersect(filterDishes).ToList();
            }

            if (data.FilterMinCoockingTime != null || data.FilterMaxCoockingTime != null)
            {
                int minCoockingTime = data.FilterMinCoockingTime ?? default;
                int maxCoockingTime = data.FilterMaxCoockingTime ?? default;
                filterDishes = _dishService.FilterByCoockingTime(minCoockingTime, maxCoockingTime);
                dishes = dishes.Intersect(filterDishes).ToList();
            }

            ViewSendData sendData = new ViewSendData() { Dishes = dishes };

            return Json(sendData);
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
