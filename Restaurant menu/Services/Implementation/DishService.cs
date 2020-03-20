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

        public IQueryable<Dish> GetAll()
        {
            return _dishDataService.GetAll();
        }

        public IQueryable<Dish> GetPage(PageParamsDto pageParams)
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

            IQueryable<Dish> query;

            if (to > count)
            {
                query = _dishDataService.GetRange(from, count);
            }
            else
            {
                query = _dishDataService.GetRange(from, to);
            }

            return query;
        }

        public int GetTotalPages(int pageSize)
        {
            int countDishes = GetCountDishes();
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

        public IQueryable<Dish> Sort(SortParamsDto sortParams)
        {
            if (sortParams.ByAscending)
            {
                return _dishDataService.Sort(sortParams.FieldName);
            }
            else
            {
                return _dishDataService.SortDescending(sortParams.FieldName);
            }
        }

        public IQueryable<Dish> Filter(FilterParamsDto filterParams)
        {
            return _dishDataService.Filter(filterParams);
        }

        public IQueryable<Dish> Sort(IQueryable<Dish> dishes, SortParamsDto sortParams)
        {
            if (sortParams.FieldName == null)
            {
                return dishes;
            }

            if (sortParams.ByAscending)
            {
                return _dishDataService.Sort(dishes, sortParams.FieldName);
            }
            else
            {
                return _dishDataService.SortDescending(dishes, sortParams.FieldName);
            }
        }

        public IQueryable<Dish> Filter(IQueryable<Dish> dishes, FilterParamsDto filterParams)
        {
            return _dishDataService.Filter(dishes, filterParams);
        }


    }
}
