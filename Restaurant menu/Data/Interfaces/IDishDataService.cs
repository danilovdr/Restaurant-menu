using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using System.Linq;

namespace Restaurant_menu.Data.Interfaces
{
    public interface IDishDataService
    {
        //Спрость что лучше возвращать, Iqueryable или List
        Dish Get(long id);
        IQueryable<Dish> GetAll();
        int GetCountDishes();
        Dish Create(Dish dish);
        Dish Update(Dish dish);
        void Delete(long id);
        //Спросить как лучше передавать параметры фильтрации
        IQueryable<Dish> Filter(GetDishesParamsDto filterParams);
        IQueryable<Dish> Sort(string fieldName);
        IQueryable<Dish> SortDescending(string fieldName);
    }
}
