using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        List<Dish> GetAll();
        void CreateDish(Dish dish);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);
        List<Dish> SortByField(string fieldName, bool ascending);
    }
}
