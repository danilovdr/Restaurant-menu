using Restaurant_menu.Models;

namespace Restaurant_menu.Data.Interfaces.Factories
{
    public interface IDefaultIngredientsFactory
    {
        Ingredient[] GetIngredients();
        Ingredient[] GetIngredients(Dish dish);
    }
}
