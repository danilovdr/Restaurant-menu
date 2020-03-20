using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        Dish GetById(long id);
        Dish[] GetAll();
        Dish[] GetPage(Dish[] dishes, PageParamsDto pageParams);
        int GetCountDishes();
        int GetTotalPages(int countDishes, int pageSize);
        Dish[] FilterAndSort(FilterParamsDto filterParams, SortParamsDto sortParams);
        void CreateDish(Dish dish);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);

    }
}
