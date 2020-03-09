using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Interfaces
{
    public interface IDishDataService
    {
        Dish Get(long id);
        List<Dish> GetAll();
        void Create(Dish dish);
        void Delete(long id);
        void Update(Dish dish);
    }
}
