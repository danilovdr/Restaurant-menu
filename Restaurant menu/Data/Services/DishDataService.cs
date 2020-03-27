using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Excaptions;
using Restaurant_menu.Exceptions;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
using System.Collections.Generic;
using System.Linq;

namespace Restaurant_menu.Data.Services
{
    public class DishDataService : IDishDataService
    {
        public DishDataService(IApplcationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        private IApplcationDbContext _dbContext;

        private bool HasDish(long id)
        {
            return _dbContext.Dishes.Any(p => p.Id == id);
        }

        private bool HasDish(string name)
        {
            name = name.Trim(' ');
            return _dbContext.Dishes.Any(p => p.Name.Trim(' ') == name);
        }

        public Dish Get(long id)
        {
            Dish dish = _dbContext.Dishes.FirstOrDefault(p => p.Id == id);
            return dish;
        }

        public IQueryable<Dish> GetAll()
        {
            return _dbContext.Dishes;
        }

        public int GetCountDishes()
        {
            return _dbContext.Dishes.Count();
        }

        public Dish Create(Dish dish)
        {
            if (HasDish(dish.Name))
            {
                throw new NameDishException("Блюдо с таким именем уже существует");
            }

            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();
            //return _dbContext.Dishes.Last(); //Спросить как получить последний созданный элемент
            return null;
        }

        public Dish Update(Dish dish)
        {
            Dish updatedDish = Get(dish.Id);

            if (updatedDish == null)
            {
                throw new NotFoundDishException("Обновляемое блюдо не найдено");
            }

            if (dish.Name != updatedDish.Name && HasDish(dish.Name))
            {
                throw new NameDishException("Блюдо с таким именем уже существует");
            }

            updatedDish.Name = dish.Name;
            updatedDish.Ingredients = dish.Ingredients;
            updatedDish.Description = dish.Description;
            updatedDish.Cost = dish.Cost;
            updatedDish.Weight = dish.Weight;
            updatedDish.Calories = dish.Calories;
            updatedDish.CoockingTime = dish.CoockingTime;

            _dbContext.SaveChanges();
            return updatedDish;
        }

        public void Delete(long id)
        {
            Dish deletedDish = Get(id);

            if (deletedDish == null)
            {
                throw new NotFoundDishException("Удаляемое блюдо не найдено");
            }

            _dbContext.Dishes.Remove(deletedDish);
            _dbContext.SaveChanges();
        }

        public IQueryable<Dish> Filter(GetDishesParamsDto filterParams)
        {
            IQueryable<Dish> dishQuery = _dbContext.Dishes;

            if (filterParams == null)
            {
                return dishQuery;
            }

            if (!string.IsNullOrWhiteSpace(filterParams.Name))
            {
                dishQuery = dishQuery.Where(p => p.Name.Contains(filterParams.Name));
            }

            if (!string.IsNullOrWhiteSpace(filterParams.Ingredients))
            {
                dishQuery = dishQuery.Where(p => p.Ingredients.Contains(filterParams.Ingredients));
            }

            if (!string.IsNullOrWhiteSpace(filterParams.Description))
            {
                dishQuery = dishQuery.Where(p => p.Description.Contains(filterParams.Description));
            }

            if (filterParams.MinCost != null)
            {
                dishQuery = dishQuery.Where(p => p.Cost >= filterParams.MinCost);
            }

            if (filterParams.MaxCost != null)
            {
                dishQuery = dishQuery.Where(p => p.Cost <= filterParams.MaxCost);
            }

            if (filterParams.MinWeight != null)
            {
                dishQuery = dishQuery.Where(p => p.Weight >= filterParams.MinWeight);
            }

            if (filterParams.MaxWeight != null)
            {
                dishQuery = dishQuery.Where(p => p.Weight <= filterParams.MaxWeight);
            }

            if (filterParams.MinCalories != null)
            {
                dishQuery = dishQuery.Where(p => p.Calories >= filterParams.MinCalories);
            }

            if (filterParams.MaxCalories != null)
            {
                dishQuery = dishQuery.Where(p => p.Calories <= filterParams.MaxCalories);
            }

            if (filterParams.MinCoockingTime != null)
            {
                dishQuery = dishQuery.Where(p => p.CoockingTime >= filterParams.MinCoockingTime);
            }

            if (filterParams.MaxCoockingTime != null)
            {
                dishQuery = dishQuery.Where(p => p.CoockingTime <= filterParams.MaxCoockingTime);
            }

            return dishQuery;
        }

        public IQueryable<Dish> Sort(string fieldName)
        {
            return fieldName.ToLower() switch
            {
                "createdate" => _dbContext.Dishes.OrderBy(p => p.CreateDate),
                "name" => _dbContext.Dishes.OrderBy(p => p.Name),
                "ingredients" => _dbContext.Dishes.OrderBy(p => p.Ingredients),
                "description" => _dbContext.Dishes.OrderBy(p => p.Description),
                "cost" => _dbContext.Dishes.OrderBy(p => p.Cost),
                "weight" => _dbContext.Dishes.OrderBy(p => p.Weight),
                "calories" => _dbContext.Dishes.OrderBy(p => p.Calories * p.Weight),
                "coockingtime" => _dbContext.Dishes.OrderBy(p => p.CoockingTime),
                _ => _dbContext.Dishes
            };
        }

        public IQueryable<Dish> SortDescending(string fieldName)
        {
             return fieldName.ToLower() switch
            {
                "createdate" => _dbContext.Dishes.OrderByDescending(p => p.CreateDate),
                "name" => _dbContext.Dishes.OrderByDescending(p => p.Name),
                "ingredients" => _dbContext.Dishes.OrderByDescending(p => p.Ingredients),
                "description" => _dbContext.Dishes.OrderByDescending(p => p.Description),
                "cost" => _dbContext.Dishes.OrderByDescending(p => p.Cost),
                "weight" => _dbContext.Dishes.OrderByDescending(p => p.Weight),
                "calories" => _dbContext.Dishes.OrderByDescending(p => p.Calories * p.Weight),
                "coockingtime" => _dbContext.Dishes.OrderByDescending(p => p.CoockingTime),
                _ => _dbContext.Dishes
            };
        }
    }
}
