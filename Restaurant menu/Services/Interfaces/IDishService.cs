using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using System.Linq;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        Dish GetById(long id);
        IQueryable<Dish> GetAll();
        IQueryable<Dish> GetPage(PageParamsDto pageParams);
        IQueryable<Dish> GetPage(IQueryable<Dish> dishes, PageParamsDto pageParams);
        int GetCountDishes();
        int GetTotalPages(int pageSize);
        void CreateDish(Dish dish);
        IQueryable<Dish> Sort(IQueryable<Dish> dishes, SortParamsDto sortParams);
        IQueryable<Dish> Filter(IQueryable<Dish> dishes, FilterParamsDto filterParams);
        IQueryable<Dish> Sort(SortParamsDto sortParams);
        IQueryable<Dish> Filter(FilterParamsDto filterParams);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);

    }
}
