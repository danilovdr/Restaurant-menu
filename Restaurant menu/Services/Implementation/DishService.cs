using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using Restaurant_menu.Services.Interfaces.Factories;
using System;
using System.Collections.Generic;

namespace Restaurant_menu.Services.Implementation
{
    public class DishService : IDishService
    {
        public DishService(IDishDataService dishDataService, IDefaultIngredientsFactory defaultIngredientsFactory)
        {
            _dishDataService = dishDataService;
            _defaultIngredientsFactory = defaultIngredientsFactory;
        }

        private IDishDataService _dishDataService;
        private IDefaultIngredientsFactory _defaultIngredientsFactory;

        public List<Dish> GetAll()
        {
            return _dishDataService.GetAll();
        }

        public void CreateDish(Dish dish)
        {
            dish.CreateDate = DateTime.Now;
            dish.Ingredients = _defaultIngredientsFactory.GetIngredients(dish);
            _dishDataService.Create(dish);
        }

        public void DeleteDish(long id)
        {
            _dishDataService.Delete(id);
        }

        public void UpdateDish(Dish dish)
        {
            _dishDataService.Update(dish);
        }

        public List<Dish> SortByFieldName(string fieldName, bool byAscending)
        {
            switch (fieldName)
            {
                case "Name":
                    return _dishDataService.SortByName(byAscending);
                case "Cost":
                    return _dishDataService.SortByCost(byAscending);
                case "Weight":
                    return _dishDataService.SortByWeight(byAscending);
                case "Calories":
                    return _dishDataService.SortByCalories(byAscending);
                case "CoockingTime":
                    return _dishDataService.SortByCoockingTime(byAscending);
                default:
                    return default;
            }
        }

        public List<Dish> FilterByName(string name)
        {
            return _dishDataService.FilterByName(name);
        }

        public List<Dish> FilterByCost(int minCost, int maxCost)
        {
            return _dishDataService.FilterByCost(minCost, maxCost);
        }

        public List<Dish> FilterByWeight(int minWeight, int maxWeight)
        {
            return _dishDataService.FilterByWeight(minWeight, maxWeight);
        }

        public List<Dish> FilterByCalories(int minCalories, int maxCalories)
        {
            return _dishDataService.FilterByCalories(minCalories, maxCalories);
        }

        public List<Dish> FilterByCoockingTime(int minCoockingTime, int maxCoockingTime)
        {
            return _dishDataService.FilterByCoockingTime(minCoockingTime, maxCoockingTime);
        }
    }
}
