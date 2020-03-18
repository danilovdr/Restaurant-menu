using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        Dish GetById(long id);
        Dish[] GetAll();
        void CreateDish(Dish dish);
        Dish[] Sort(SortParamsDto sortParams);
        Dish[] Filter(FilterParamsDto filterParams);
        Dish[] FilterAndSort(FilterParamsDto filterParams, SortParamsDto sortParams);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);

    }
}
