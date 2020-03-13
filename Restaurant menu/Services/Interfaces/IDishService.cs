using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        List<Dish> GetAll();
        void CreateDish(Dish dish);
        List<Dish> SortByFieldName(string fieldName, bool byAscending);
        List<Dish> FilterByName(string name);
        List<Dish> FilterByCost(int minCost, int maxCost);
        List<Dish> FilterByWeight(int minWeight, int maxWeight);
        List<Dish> FilterByCalories(int minCalories, int maxCalories);
        List<Dish> FilterByCoockingTime(int minCoockingTime, int maxCoockingTime);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);
        
    }
}
