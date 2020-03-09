using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Factories;
using Restaurant_menu.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant_menu.Data.Services
{
    public class DishDataService : IDishDataService
    {
        public DishDataService([FromServices] ApplicationDbContext dbContext,
            [FromServices] IDishFactory dishFactory)
        {
            _dbContext = dbContext;
            _dishFactory = dishFactory;
        }

        private ApplicationDbContext _dbContext;
        private IDishFactory _dishFactory;

        public Dish Get(long id)
        {
            return _dbContext.Dishes.FirstOrDefault(p => p.Id == id);
        }

        public void Create(Dish dish)
        {
            Dish createdDish = _dishFactory.CreateDish(
                dish.Name,
                dish.Description,
                dish.Cost,
                dish.Weight,
                dish.Calories,
                dish.CoockingTime);
            _dbContext.Dishes.Add(createdDish);
            _dbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Dish deletedDish = Get(id);

            if (deletedDish != null)
            {
                _dbContext.Dishes.Remove(deletedDish);
                _dbContext.SaveChanges();
            }
        }

        public void Update(Dish dish)
        {
            _dbContext.Dishes.Update(dish);
            _dbContext.SaveChanges();
        }

        public List<Dish> GetAll()
        {
            return _dbContext.Dishes.ToList();
        }
    }
}
