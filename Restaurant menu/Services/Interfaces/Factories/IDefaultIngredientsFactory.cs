using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Interfaces.Factories
{
    public interface IDefaultIngredientsFactory
    {
        List<Ingredient> GetIngredients();
        List<Ingredient> GetIngredients(Dish dish);
    }
}
