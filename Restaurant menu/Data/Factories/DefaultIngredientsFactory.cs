using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Data.Interfaces.Factories;
using Restaurant_menu.Models;

namespace Restaurant_menu.Data.Factories
{
    public class DefaultIngredientsFactory : IDefaultIngredientsFactory
    {
        public DefaultIngredientsFactory()
        {
        }

        public Ingredient[] GetIngredients()
        {
            return GetIngredients(null);
        }

        public Ingredient[] GetIngredients(Dish dish)
        {
            Ingredient[] ingredients = new Ingredient[3];
            ingredients[0] = new Ingredient() { Name = "Любовь", Dish = dish };
            ingredients[1] = new Ingredient() { Name = "Доброта", Dish = dish };
            ingredients[2] = new Ingredient() { Name = "Забота", Dish = dish };

            return ingredients;
        }
    }
}
