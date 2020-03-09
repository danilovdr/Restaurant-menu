using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Interfaces.Factories
{
    public interface IDishFactory
    {
        Dish CreateDish(string name, string description, int cost, int weight, int calories, int coockingTime);
        Dish CreateDish(string name, string description, int cost, int weight, int calories, int coockingTime, List<Ingredient> ingredients);
    }
}
