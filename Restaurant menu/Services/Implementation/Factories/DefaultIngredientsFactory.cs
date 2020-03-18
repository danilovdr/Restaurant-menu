using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces.Factories;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Implementation.Factories
{
    public class DefaultIngredientsFactory : IDefaultIngredientsFactory
    {
        public List<Ingredient> GetIngredients()
        {
            return GetIngredients(default);
        }

        public List<Ingredient> GetIngredients(Dish dish)
        {
            List<Ingredient> ingredients = new List<Ingredient>();
            ingredients.Add(new Ingredient() { Name = "Любовь", Dish = dish });
            ingredients.Add(new Ingredient() { Name = "Доброта", Dish = dish });
            ingredients.Add(new Ingredient() { Name = "Забота", Dish = dish });

            return ingredients;
        }
    }
}
