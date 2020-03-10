using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Data.Interfaces.Factories;
using Restaurant_menu.Models;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant_menu.Data.Services
{
    public class DishDataService : IDishDataService
    {
        public DishDataService([FromServices] IApplcationDbContext dbContext,
            [FromServices] IDishFactory dishFactory,
            [FromServices] IDefaultIngredientsFactory ingredientsFactory)
        {
            _dbContext = dbContext;
            _dishFactory = dishFactory;
            _ingredientsFactory = ingredientsFactory;
        }

        private IApplcationDbContext _dbContext;
        private IDishFactory _dishFactory;
        private IDefaultIngredientsFactory _ingredientsFactory;

        public Dish Get(long id)
        {
            Dish dish = _dbContext.Dishes.FirstOrDefault(p => p.Id == id);
            return dish;
        }

        public void Create(Dish dish)
        {
            Ingredient[] ingredients = _ingredientsFactory.GetIngredients(dish);
            _dbContext.Ingredients.AddRange(ingredients);

            Dish createdDish = _dishFactory.CreateDish(
                dish.Name,
                dish.Description,
                dish.Cost,
                dish.Weight,
                dish.Calories,
                dish.CoockingTime,
                ingredients);
            _dbContext.Dishes.Add(createdDish);
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

                _dbContext.Dishes.Update(updatedDish);
                _dbContext.SaveChanges();
                return true;
            }

            return false;
        }

        public List<Dish> GetAll()
        {
            return _dbContext.Dishes.ToList();
        }
    }
}
