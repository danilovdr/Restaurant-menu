using Restaurant_menu.Services.Interfaces.Factories;

namespace Restaurant_menu.Services.Implementation.Factories
{
    public class DefaultIngredientsFactory : IDefaultIngredientsFactory
    {
        public string GetDefaultIngredients()
        {
            return "Вера, надежда, любовь";
        }

      
    }
}
