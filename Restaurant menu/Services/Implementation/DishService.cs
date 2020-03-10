using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using System.Collections.Generic;
using System.Linq;

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

        public List<Dish> SortByField(List<Dish> dishes, string fieldName, bool ascending)
        {
            List<Dish> sortedDishes;

            if (ascending)
            {
                switch (fieldName)
                {
                    case "Name":
                        sortedDishes = dishes.OrderBy(p => p.Name).ToList();
                        break;
                    case "Cost":
                        sortedDishes = dishes.OrderBy(p => p.Cost).ToList();
                        break;
                    case "Weight":
                        sortedDishes = dishes.OrderBy(p => p.Weight).ToList();
                        break;
                    case "Calories":
                        sortedDishes = dishes.OrderBy(p => p.Calories).ToList();
                        break;
                    case "CoockingTime":
                        sortedDishes = dishes.OrderBy(p => p.CoockingTime).ToList();
                        break;
                    default:
                        sortedDishes = null;
                        break;
                }
            }
            else
            {
                switch (fieldName)
                {
                    case "Name":
                        sortedDishes = dishes.OrderByDescending(p => p.Name).ToList();
                        break;
                    case "Cost":
                        sortedDishes = dishes.OrderByDescending(p => p.Cost).ToList();
                        break;
                    case "Weight":
                        sortedDishes = dishes.OrderByDescending(p => p.Weight).ToList();
                        break;
                    case "Calories":
                        sortedDishes = dishes.OrderByDescending(p => p.Calories).ToList();
                        break;
                    case "CoockingTime":
                        sortedDishes = dishes.OrderByDescending(p => p.CoockingTime).ToList();
                        break;
                    default:
                        sortedDishes = null;
                        break;
                }
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
