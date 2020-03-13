using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Models;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant_menu.Data.Services
{
    public class DishDataService : IDishDataService
    {
        public DishDataService([FromServices] IApplcationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        private IApplcationDbContext _dbContext;

        public Dish Get(long id)
        {
            Dish dish = _dbContext.Dishes.FirstOrDefault(p => p.Id == id);
            return dish;
        }

        public void Create(Dish dish)
        {
            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();
        }

        public bool Delete(long id)
        {
            Dish deletedDish = Get(id);

            if (deletedDish != null)
            {
                _dbContext.Dishes.Remove(deletedDish);
                _dbContext.SaveChanges();
                return true;
            }

            return false;
        }

        public bool Update(Dish dish)
        {
            Dish updatedDish = Get(dish.Id);

            if (updatedDish != null)
            {
                updatedDish.Name = dish.Name;
                updatedDish.Description = dish.Description;
                updatedDish.Cost = dish.Cost;
                updatedDish.Weight = dish.Weight;
                updatedDish.Calories = dish.Calories;
                updatedDish.CoockingTime = dish.CoockingTime;

                _dbContext.SaveChanges();
                return true;
            }

            return false;
        }

        public List<Dish> GetAll()
        {
            return _dbContext.Dishes.ToList();
        }

        public List<Dish> SortByName(bool byAscending)
        {
            if (byAscending)
            {
                return _dbContext.Dishes.OrderBy(p => p.Name).ToList();
            }
            else
            {
                return _dbContext.Dishes.OrderByDescending(p => p.Name).ToList();
            }
        }

        public List<Dish> SortByCost(bool byAscending)
        {
            if (byAscending)
            {
                return _dbContext.Dishes.OrderBy(p => p.Cost).ToList();
            }
            else
            {
                return _dbContext.Dishes.OrderByDescending(p => p.Cost).ToList();
            }
        }

        public List<Dish> SortByWeight(bool byAscending)
        {
            if (byAscending)
            {
                return _dbContext.Dishes.OrderBy(p => p.Weight).ToList();
            }
            else
            {
                return _dbContext.Dishes.OrderByDescending(p => p.Weight).ToList();
            }
        }

        public List<Dish> SortByCalories(bool byAscending)
        {
            if (byAscending)
            {
                return _dbContext.Dishes.OrderBy(p => p.Calories).ToList();
            }
            else
            {
                return _dbContext.Dishes.OrderByDescending(p => p.Calories).ToList();
            }
        }

        public List<Dish> SortByCoockingTime( bool byAscending)
        {
            if (byAscending)
            {
                return _dbContext.Dishes.OrderBy(p => p.CoockingTime).ToList();
            }
            else
            {
                return _dbContext.Dishes.OrderByDescending(p => p.CoockingTime).ToList();
            }
        }

        public List<Dish> FilterByName(string name)
        {
            return _dbContext.Dishes.Where(p => p.Name.Contains(name)).ToList();
        }

        public List<Dish> FilterByCost(int minCost, int maxCost)
        {
            return _dbContext.Dishes.Where(p => p.Cost >= minCost && p.Cost <= maxCost).ToList();
        }

        public List<Dish> FilterByWeight(int minWeight, int maxWeight)
        {
            return _dbContext.Dishes.Where(p => p.Weight >= minWeight && p.Weight <= maxWeight).ToList();
        }

        public List<Dish> FilterByCalories(int minCalories, int maxCalories)
        {
            return _dbContext.Dishes.Where(p => p.Calories >= minCalories && p.Calories <= maxCalories).ToList();
        }

        public List<Dish> FilterByCoockingTime(int minCoockingTime, int maxCoockingTime)
        {
            return _dbContext.Dishes.Where(p => p.CoockingTime >= minCoockingTime && p.CoockingTime <= maxCoockingTime).ToList();
        }
    }
}
