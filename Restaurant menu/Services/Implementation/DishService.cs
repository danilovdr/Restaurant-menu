using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using Restaurant_menu.Models.Excaptions;
using Restaurant_menu.Services.Interfaces;
using System;
using System.Linq;

namespace Restaurant_menu.Services.Implementation
{
    public class DishService : IDishService
    {
        public DishService(IDishDataService dishDataService)
        {
            _dishDataService = dishDataService;
        }

        private IDishDataService _dishDataService;

        public Dish GetById(long id)
        {
            return _dishDataService.Get(id);
        }

        public Dish[] GetAll()
        {
            return _dishDataService.GetAll().ToArray();
        }

        public int GetCountDishes()
        {
            return _dishDataService.GetCountDishes();
        }

        public void CreateDish(Dish dish)
        {
            dish.CreateDate = DateTime.Now;
            _dishDataService.Create(dish);
        }

        public void DeleteDish(long id)
        {
            if (_dishDataService.HasDish(id))
            {
                _dishDataService.Delete(id);
            }
            else
            {
                throw new NotFoundDishException("Dish not found");
            }
        }

        public void UpdateDish(Dish dish)
        {
            if (_dishDataService.HasDish(dish.Id))
            {
                _dishDataService.Update(dish);
            }
            else
            {
                throw new NotFoundDishException("Dish not found");
            }
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
                dishes = _dishDataService.Sort(dishes, sortParams.FieldName);
            }
            else
            {
                dishes = _dishDataService.SortDescending(dishes, sortParams.FieldName);
            }

            return dishes.ToArray();
        }
    }
}
