using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Interfaces.Factories
{
    public interface IDefaultIngredientsFactory
    {
        List<Ingredient> GetIngredients();
    }
}
