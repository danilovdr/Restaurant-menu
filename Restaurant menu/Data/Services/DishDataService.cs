using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using System;
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

        public IQueryable<Dish> GetAll()
        {
            return _dbContext.Dishes;
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

        public IQueryable<Dish> Sort(string fieldName)
        {
            return fieldName switch
            {
                "Name" => _dbContext.Dishes.OrderBy(p => p.Name),
                "Cost" => _dbContext.Dishes.OrderBy(p => p.Cost),
                "Weight" => _dbContext.Dishes.OrderBy(p => p.Weight),
                "Calories" => _dbContext.Dishes.OrderBy(p => p.Calories),
                "CoockingTime" => _dbContext.Dishes.OrderBy(p => p.CoockingTime),
                _ => GetAll()
            };
        }

        public IQueryable<Dish> SortDescending(string fieldName)
        {
            return fieldName switch
            {
                "Name" => _dbContext.Dishes.OrderByDescending(p => p.Name),
                "Cost" => _dbContext.Dishes.OrderByDescending(p => p.Cost),
                "Weight" => _dbContext.Dishes.OrderByDescending(p => p.Weight),
                "Calories" => _dbContext.Dishes.OrderByDescending(p => p.Calories),
                "CoockingTime" => _dbContext.Dishes.OrderByDescending(p => p.CoockingTime),
                _ => GetAll()
            };
        }

        public IQueryable<Dish> Filter(FilterParamsDto filterParams)
        {
            if (filterParams == null)
            {
                throw new ArgumentNullException("filterParams is null");
            }

            IQueryable<Dish> dishQuery = _dbContext.Dishes;

            if (filterParams.Name != null)
            {
                dishQuery = dishQuery.Where(p => p.Name.Contains(filterParams.Name));
            }

            if (filterParams.MinCost != null)
            {
                dishQuery = dishQuery.Where(p => p.Cost >= filterParams.MinCost);
            }

            if (filterParams.MaxCost != null)
            {
                dishQuery = dishQuery.Where(p => p.Cost <= filterParams.MaxCost);
            }

            if (filterParams.MinWeight != null)
            {
                dishQuery = dishQuery.Where(p => p.Weight >= filterParams.MinWeight);
            }

            if (filterParams.MaxWeight != null)
            {
                dishQuery = dishQuery.Where(p => p.Weight <= filterParams.MaxWeight);
            }

            if (filterParams.MinCalories != null)
            {
                dishQuery = dishQuery.Where(p => p.Calories >= filterParams.MinCalories);
            }

            if (filterParams.MaxCalories != null)
            {
                dishQuery = dishQuery.Where(p => p.Calories <= filterParams.MaxCalories);
            }

            if (filterParams.MinCoockingTime != null)
            {
                dishQuery = dishQuery.Where(p => p.CoockingTime >= filterParams.MinCoockingTime);
            }

            if (filterParams.MaxCoockingTime != null)
            {
                dishQuery = dishQuery.Where(p => p.CoockingTime <= filterParams.MaxCoockingTime);
            }

            return dishQuery;

        }
    }
}
