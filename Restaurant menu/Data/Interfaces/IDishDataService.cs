using Restaurant_menu.Models;
using System.Collections.Generic;

namespace Restaurant_menu.Data.Interfaces
{
    public interface IDishDataService
    {
        Dish Get(long id);
        List<Dish> GetAll();
        void Create(Dish dish);
        bool Delete(long id);
        bool Update(Dish dish);
        List<Dish> SortByName(bool byAscending);
        List<Dish> SortByCost(bool byAscending);
        List<Dish> SortByWeight(bool byAscending);
        List<Dish> SortByCalories(bool byAscending);
        List<Dish> SortByCoockingTime( bool byAscending);
        List<Dish> FilterByName(string name);
        List<Dish> FilterByCost(int minCost, int maxCost);
        List<Dish> FilterByWeight(int minWeight, int maxWeight);
        List<Dish> FilterByCalories(int minCalories, int maxCalories);
        List<Dish> FilterByCoockingTime(int minCoockingTime, int maxCoockingTime);
    }
}
