using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces.Factories;
using Restaurant_menu.Models;
using System;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Factories
{
    public class DishFactory : IDishFactory
    {
        public DishFactory([FromServices] IDefaultIngredientsFactory ingredientsFactory)
        {
            _ingredientsFactory = ingredientsFactory;
        }

        private IDefaultIngredientsFactory _ingredientsFactory;

        public Dish CreateDish(string name, string description, int cost, int weight, int calories, int coockingTime)
        {
            var ingredients = _ingredientsFactory.GetIngredients();
            Dish createdDish = CreateDish(name, description, cost, weight, calories, coockingTime, ingredients);
            return createdDish;
        }

        public Dish CreateDish(string name, string description, int cost, int weight, int calories, int coockingTime, List<Ingredient> ingredients)
        {
            Dish createdDish = new Dish()
            {
                CreateDate = DateTime.Now,
                Name = name,
                Description = description,
                Cost = cost,
                Weight = weight,
                Calories = calories,
                CoockingTime = coockingTime,
                Ingredients = ingredients
            };

            return createdDish;
        }
    }
}
