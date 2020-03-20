using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using Restaurant_menu.Models.Excaptions;
using Restaurant_menu.Models.Exceptions;
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

        public Dish[] GetPage(Dish[] dishes, PageParamsDto pageParams)
        {
            int sizePage = pageParams.SizePage == null ? throw new ArgumentNullException("Размер страницы null") : (int)pageParams.SizePage;
            int numberPage = pageParams.NumberPage == null ? throw new ArgumentNullException("Номер страницы null") : (int)pageParams.NumberPage;

            int from = sizePage * numberPage;
            int to = (numberPage + 1) * sizePage;
            int count = _dishDataService.GetCountDishes();

            if (from > count)
            {
                throw new GetPageException("Начальный индекс больше максимального");
            }

            return to > count ? dishes.Skip(from).Take(count).ToArray() : dishes.Skip(from).Take(to).ToArray();
        }

        public int GetTotalPages(int countDishes, int pageSize)
        {
            return (int)Math.Ceiling(countDishes / (double)pageSize);
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

        public Dish[] FilterAndSort(FilterParamsDto filterParams, SortParamsDto sortParams)
        {
            IQueryable<Dish> dishes = Filter(filterParams);

            return sortParams.FieldName == null ? dishes.ToArray() : Sort(dishes, sortParams).ToArray();
        }

        private IQueryable<Dish> Filter(FilterParamsDto filterParams)
        {
            return _dishDataService.Filter(filterParams);
        }

        private IQueryable<Dish> Sort(IQueryable<Dish> dishes, SortParamsDto sortParams)
        {
            if (sortParams.ByAscending)
            {
                return Sort(dishes, sortParams.FieldName);
            }
            else
            {
                return SortDescending(dishes, sortParams.FieldName);
            }
        }

        private IQueryable<Dish> Sort(IQueryable<Dish> dishes, string fieldName)
        {
            return fieldName switch
            {
                "Name" => dishes.OrderBy(p => p.Name),
                "Cost" => dishes.OrderBy(p => p.Cost),
                "Weight" => dishes.OrderBy(p => p.Weight),
                "Calories" => dishes.OrderBy(p => p.Calories * p.Weight),
                "CoockingTime" => dishes.OrderBy(p => p.CoockingTime),
                _ => dishes
            };
        }

        private IQueryable<Dish> SortDescending(IQueryable<Dish> dishes, string fieldName)
        {
            return fieldName switch
            {
                "Name" => dishes.OrderByDescending(p => p.Name),
                "Cost" => dishes.OrderByDescending(p => p.Cost),
                "Weight" => dishes.OrderByDescending(p => p.Weight),
                "Calories" => dishes.OrderByDescending(p => p.Calories * p.Weight),
                "CoockingTime" => dishes.OrderByDescending(p => p.CoockingTime),
                _ => dishes
            };
        }
    }
}
