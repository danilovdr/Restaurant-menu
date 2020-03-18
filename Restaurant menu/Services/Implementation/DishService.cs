using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using Restaurant_menu.Services.Interfaces;
using Restaurant_menu.Services.Interfaces.Factories;
using System;
using System.Linq;

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

        public Dish GetById(long id)
        {
            return _dishDataService.Get(id);
        }

        public Dish[] GetAll()
        {
            return _dishDataService.GetAll().ToArray();
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

        public Dish[] Sort(SortParamsDto sortParams)
        {
            if (sortParams.ByAscending)
            {
                return _dishDataService.Sort(sortParams.FieldName).ToArray();
            }
            else
            {
                return _dishDataService.SortDescending(sortParams.FieldName).ToArray();
            }
        }

        public Dish[] Filter(FilterParamsDto filterParams)
        {
            return _dishDataService.Filter(filterParams).ToArray();
        }

        public Dish[] FilterAndSort(FilterParamsDto filterParams, SortParamsDto sortParams)
        {
            IQueryable<Dish> dishes = _dishDataService.Filter(filterParams);

            if (sortParams.ByAscending)
            {
                Sort(ref dishes, sortParams.FieldName);
            }
            else
            {
                SortDescending(ref dishes, sortParams.FieldName);
            }

            return dishes.ToArray();
        }

        private void Sort(ref IQueryable<Dish> dishes, string fieldName)
        {
            dishes = fieldName switch
            {
                "Name" => dishes.OrderBy(p => p.Name),
                "Cost" => dishes.OrderBy(p => p.Cost),
                "Weight" => dishes.OrderBy(p => p.Weight),
                "Calories" => dishes.OrderBy(p => p.Calories),
                "CoockingTime" => dishes.OrderBy(p => p.CoockingTime),
                _ => dishes
            };
        }

        private void SortDescending(ref IQueryable<Dish> dishes, string fieldName)
        {
            dishes = fieldName switch
            {
                "Name" => dishes.OrderByDescending(p => p.Name),
                "Cost" => dishes.OrderByDescending(p => p.Cost),
                "Weight" => dishes.OrderByDescending(p => p.Weight),
                "Calories" => dishes.OrderByDescending(p => p.Calories),
                "CoockingTime" => dishes.OrderByDescending(p => p.CoockingTime),
                _ => dishes
            };
        }
    }
}
