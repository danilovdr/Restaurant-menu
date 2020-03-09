using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_menu.Services.Implementation
{
    public class DishService : IDishService
    {
        public DishService([FromServices] IDishDataService dishDataService)
        {
            _dishDataService = dishDataService;
        }

        private IDishDataService _dishDataService;

        public void CreateDish(Dish dish)
        {
            _dishDataService.Create(dish);
        }

        public void DeleteDish(long id)
        {
            _dishDataService.Delete(id);
        }

        public List<Dish> SortByField(string fieldName, bool ascending)
        {
            List<Dish> allDishes = _dishDataService.GetAll();
            List<Dish> sortedDishes;

            switch (fieldName)
            {
                case "Name":
                    sortedDishes = allDishes.OrderBy(p => p.Name).ToList();
                    break;
                case "Cost":
                    sortedDishes = allDishes.OrderBy(p => p.Cost).ToList();
                    break;
                case "Weight":
                    sortedDishes = allDishes.OrderBy(p => p.Weight).ToList();
                    break;
                case "Calories":
                    sortedDishes = allDishes.OrderBy(p => p.Calories).ToList();
                    break;
                case "CoockingTime":
                    sortedDishes = allDishes.OrderBy(p => p.CoockingTime).ToList();
                    break;
                default:
                    sortedDishes = null;
                    break;
            }

            return sortedDishes;
        }

        public void UpdateDish(Dish dish)
        {
            _dishDataService.Update(dish);
        }

        public List<Dish> GetAll()
        {
            return _dishDataService.GetAll();
        }
    }
}
