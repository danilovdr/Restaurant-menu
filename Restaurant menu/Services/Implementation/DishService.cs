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

        public List<Dish> SortByName(List<Dish> dishes, bool byAscending)
        {
            if (byAscending)
            {
                return dishes.OrderBy(p => p.Name).ToList();
            }
            else
            {
                return dishes.OrderByDescending(p => p.Name).ToList();
            }
        }

        public List<Dish> SortByCost(List<Dish> dishes, bool byAscending)
        {
            if (byAscending)
            {
                return dishes.OrderBy(p => p.Cost).ToList();
            }
            else
            {
                return dishes.OrderByDescending(p => p.Cost).ToList();
            }
        }

        public List<Dish> SortByWeight(List<Dish> dishes, bool byAscending)
        {
            if (byAscending)
            {
                return dishes.OrderBy(p => p.Weight).ToList();
            }
            else
            {
                return dishes.OrderByDescending(p => p.Weight).ToList();
            }
        }

        public List<Dish> SortByCalories(List<Dish> dishes, bool byAscending)
        {
            if (byAscending)
            {
                return dishes.OrderBy(p => p.Calories).ToList();
            }
            else
            {
                return dishes.OrderByDescending(p => p.Calories).ToList();
            }
        }

        public List<Dish> SortByCoockingTime(List<Dish> dishes, bool byAscending)
        {
            if (byAscending)
            {
                return dishes.OrderBy(p => p.CoockingTime).ToList();
            }
            else
            {
                return dishes.OrderByDescending(p => p.CoockingTime).ToList();
            }
        }

        public List<Dish> FilterByName(List<Dish> dishes, string name)
        {
            return dishes.Where(p => p.Name.Contains(name)).ToList();
        }

        public List<Dish> FilterByCost(List<Dish> dishes, int minCost, int maxCost)
        {
            return dishes.Where(p => p.Cost >= minCost && p.Cost <= maxCost).ToList();
        }

        public List<Dish> FilterByWeight(List<Dish> dishes, int minWeight, int maxWeight)
        {
            return dishes.Where(p => p.Weight >= minWeight && p.Weight <= maxWeight).ToList();
        }

        public List<Dish> FilterByCalories(List<Dish> dishes, int minCalories, int maxCalories)
        {
            return dishes.Where(p => p.Calories >= minCalories && p.Calories <= maxCalories).ToList();
        }

        public List<Dish> FilterByCoockingTime(List<Dish> dishes, int minCoockingTime, int maxCoockingTime)
        {
            return dishes.Where(p => p.CoockingTime >= minCoockingTime && p.CoockingTime <= maxCoockingTime).ToList();
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
