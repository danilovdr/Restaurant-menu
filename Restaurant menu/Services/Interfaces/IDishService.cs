using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using Restaurant_menu.Models.ViewModels;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        Dish GetDish(long id);
        DishViewModel GetDishes(GetDishesParamsDto getDishesParams);
        Dish CreateDish(Dish dish);
        Dish UpdateDish(Dish dish);
        void DeleteDish(long id);

    }
}
