using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using Restaurant_menu.Models.ViewModels;
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

        public Dish GetDish(long id)
        {
            return _dishDataService.Get(id);
        }

        // Отфильтировали данные, отсортировали, разбили на страницы, отдали модельвьюшку
        public DishViewModel GetDishes(GetDishesParamsDto getDishesParams)
        {
            IQueryable<Dish> dishes = _dishDataService.Filter(getDishesParams);
            dishes = Sort(dishes, getDishesParams);
            Dish[] dishesArr = dishes.ToArray();

            DishViewModel viewModel = new DishViewModel();
            viewModel.CountAllDishes = _dishDataService.GetCountDishes();
            viewModel.FilteredDishes = dishesArr.Length;
            viewModel.TotalPages = GetTotalPages(dishesArr.Length, (int)getDishesParams.SizePage);
            viewModel.Dishes = GetPage(dishesArr, getDishesParams);

            return viewModel;
        }

        //Спросить что делать если длина больше. Доделать это
        private Dish[] GetPage(Dish[] dishes, GetDishesParamsDto pageParams)
        {
            if (pageParams.NumberPage == null | pageParams.SizePage == null)
            {
                return dishes;
            }
            else
            {
                int numberPage = (int)pageParams.NumberPage;
                int sizePage = (int)pageParams.SizePage;
                return dishes.Skip(numberPage * sizePage).Take(sizePage).ToArray();
            }
        }

        private int GetTotalPages(int countDishes, int sizePage)
        {
            return countDishes == 0 ? 1 : (int)Math.Ceiling(countDishes / (double)sizePage);
        }

        private IQueryable<Dish> Sort(IQueryable<Dish> dishes, GetDishesParamsDto sortParams)
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
            return fieldName == null ? dishes : fieldName.ToLower() switch
            {
                "createdate" => dishes.OrderBy(p => p.CreateDate),
                "name" => dishes.OrderBy(p => p.Name),
                "ingredients" => dishes.OrderBy(p => p.Ingredients),
                "description" => dishes.OrderBy(p => p.Description),
                "cost" => dishes.OrderBy(p => p.Cost),
                "weight" => dishes.OrderBy(p => p.Weight),
                "calories" => dishes.OrderBy(p => p.Calories * p.Weight),
                "coockingtime" => dishes.OrderBy(p => p.CoockingTime),
                _ => dishes
            };
        }

        private IQueryable<Dish> SortDescending(IQueryable<Dish> dishes, string fieldName)
        {
            return fieldName == null ? dishes : fieldName.ToLower() switch
            {
                "createdate" => dishes.OrderByDescending(p => p.CreateDate),
                "name" => dishes.OrderByDescending(p => p.Name),
                "ingredients" => dishes.OrderByDescending(p => p.Ingredients),
                "description" => dishes.OrderByDescending(p => p.Description),
                "cost" => dishes.OrderByDescending(p => p.Cost),
                "weight" => dishes.OrderByDescending(p => p.Weight),
                "calories" => dishes.OrderByDescending(p => p.Calories * p.Weight),
                "coockingtime" => dishes.OrderByDescending(p => p.CoockingTime),
                _ => dishes
            };
        }

        public Dish CreateDish(Dish dish)
        {
            dish.CreateDate = DateTime.Now;
            return _dishDataService.Create(dish);

        }

        public Dish UpdateDish(Dish dish)
        {
            return _dishDataService.Update(dish);
        }

        public void DeleteDish(long id)
        {
            _dishDataService.Delete(id);
        }
    }
}
