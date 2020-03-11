using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Interfaces
{
    public interface IDishService
    {
        List<Dish> GetAll();
        void CreateDish(Dish dish);
        List<Dish> SortByName(List<Dish> dishes, bool byAscending);
        List<Dish> SortByCost(List<Dish> dishes, bool byAscending);
        List<Dish> SortByWeight(List<Dish> dishes, bool byAscending);
        List<Dish> SortByCalories(List<Dish> dishes, bool byAscending);
        List<Dish> SortByCoockingTime(List<Dish> dishes, bool byAscending);
        List<Dish> FilterByName(List<Dish> dishes, string name);
        List<Dish> FilterByCost(List<Dish> dishes, int minCost, int maxCost);
        List<Dish> FilterByWeight(List<Dish> dishes, int minWeight, int maxWeight);
        List<Dish> FilterByCalories(List<Dish> dishes, int minCalories, int maxCalories);
        List<Dish> FilterByCoockingTime(List<Dish> dishes, int minCoockingTime, int maxCoockingTime);
        void UpdateDish(Dish dish);
        void DeleteDish(long id);
        
    }
}
