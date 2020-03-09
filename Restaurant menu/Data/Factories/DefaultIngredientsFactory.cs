using Restaurant_menu.Data.Interfaces.Factories;
using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Factories
{
    public class DefaultIngredientsFactory : IDefaultIngredientsFactory
    {
        public DefaultIngredientsFactory()
        {
            _ingredients = new List<Ingredient>();
            _ingredients.Add(new Ingredient() { Name = "Любовь" });
            _ingredients.Add(new Ingredient() { Name = "Доброта" });
            _ingredients.Add(new Ingredient() { Name = "Забота" });
        }

        private List<Ingredient> _ingredients;

        public List<Ingredient> GetIngredients()
        {
            return _ingredients;
        }
    }
}
