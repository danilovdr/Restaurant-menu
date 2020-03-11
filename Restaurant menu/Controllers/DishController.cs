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
        public IActionResult Get(string fieldNameSort, bool byAscending, string fName,
            int fMinCost, int fMaxCost, int fMinWeight, int fMaxWeight,
            int fMinCalories, int fMaxCalories, int fMinCoockingTime, int fMaxCoockingTime)
        {
            List<Dish> dishes = _dishService.GetAll();

            if (fieldNameSort != null) dishes = Sort(dishes, fieldNameSort, byAscending);

            if (fName != null) dishes = _dishService.FilterByName(dishes, fName);

            if (fMaxCost != 0) dishes = _dishService.FilterByCost(dishes, fMinCost, fMaxCost);

            if (fMaxWeight != 0) dishes = _dishService.FilterByWeight(dishes, fMinWeight, fMaxWeight);

            if (fMaxCalories != 0) dishes = _dishService.FilterByCalories(dishes, fMinCalories, fMaxCalories);

            if (fMaxCoockingTime != 0) dishes = _dishService.FilterByCoockingTime(dishes, fMinCoockingTime, fMaxCoockingTime);

            return Json(dishes);
        }

        private List<Dish> Sort(List<Dish> dishes, string fieldName, bool byAscending)
        {
            switch (fieldName)
            {
                case "Name":
                    dishes = _dishService.SortByName(dishes, byAscending);
                    break;
                case "Cost":
                    dishes = _dishService.SortByCost(dishes, byAscending);
                    break;
                case "Weight":
                    dishes = _dishService.SortByWeight(dishes, byAscending);
                    break;
                case "Calories":
                    dishes = _dishService.SortByCalories(dishes, byAscending);
                    break;
                case "CoockingTime":
                    dishes = _dishService.SortByCoockingTime(dishes, byAscending);
                    break;
            }

            return dishes;
        }



        private List<Dish> Filter(List<Dish> dishes, Dictionary<string, string> filters)
        {
            return dishes;
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
