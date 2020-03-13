using Restaurant_menu.Models;

namespace Restaurant_menu.Data.Interfaces.Factories
{
    public interface IDishFactory
    {
        Dish CreateDish(string name, string description, int cost, int weight, int calories, int coockingTime);
        Dish CreateDish(long id, string name, string description, int cost, int weight, int calories, int coockingTime, Ingredient[] ingredients);
    }
}
