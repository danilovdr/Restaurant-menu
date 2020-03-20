using Restaurant_menu.Data.Interfaces;
using Restaurant_menu.Data.Interfaces.Contexts;
using Restaurant_menu.Models;
using Restaurant_menu.Models.DTO;
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

        public bool HasDish(long id)
        {
            Dish dish = _dbContext.Dishes.Find(id);
            return dish != null;
        }

        public Dish Get(long id)
        {
            Dish dish = _dbContext.Dishes.FirstOrDefault(p => p.Id == id);

            //if (dish == null)
            //{
            //    throw new NullReferenceException("Can not find dish by " + id + " id");
            //}

            return dish;
        }

        public IQueryable<Dish> GetAll()
        {
            return _dbContext.Dishes;
        }


        public IQueryable<Dish> GetRange(int fromIndex, int toIndex)
        {
            return _dbContext.Dishes.Skip(fromIndex).Take(toIndex);
        }

        public int GetCountDishes()
        {
            return _dbContext.Dishes.Count();
        }

        public void Create(Dish dish)
        {
            _dbContext.Dishes.Add(dish);
            _dbContext.SaveChanges();
        }

        public void Delete(long id)
        {
            Dish deletedDish = Get(id);

            //if (deletedDish == null)
            //{
            //    throw new NullReferenceException("Can not find deleted dish");
            //}

            _dbContext.Dishes.Remove(deletedDish);
            _dbContext.SaveChanges();
        }

        public void Update(Dish dish)
        {
            Dish updatedDish = Get(dish.Id);

            //if (updatedDish == null)
            //{
            //    throw new NullReferenceException("Can not find updated dish");
            //}

            updatedDish.Name = dish.Name;
            updatedDish.Ingredients = dish.Ingredients;
            updatedDish.Description = dish.Description;
            updatedDish.Cost = dish.Cost;
            updatedDish.Weight = dish.Weight;
            updatedDish.Calories = dish.Calories;
            updatedDish.CoockingTime = dish.CoockingTime;

            _dbContext.SaveChanges();
        }

        public IQueryable<Dish> Sort(string fieldName)
        {
            return fieldName switch
            {
                "Name" => _dbContext.Dishes.OrderBy(p => p.Name),
                "Cost" => _dbContext.Dishes.OrderBy(p => p.Cost),
                "Weight" => _dbContext.Dishes.OrderBy(p => p.Weight),
                "Calories" => _dbContext.Dishes.OrderBy(p => p.Calories * p.Weight),
                "CoockingTime" => _dbContext.Dishes.OrderBy(p => p.CoockingTime),
                _ => GetAll()
            };
        }

        public IQueryable<Dish> SortDescending(string fieldName)
        {
            return fieldName switch
            {
                "Name" => _dbContext.Dishes.OrderByDescending(p => p.Name),
                "Cost" => _dbContext.Dishes.OrderByDescending(p => p.Cost),
                "Weight" => _dbContext.Dishes.OrderByDescending(p => p.Weight),
                "Calories" => _dbContext.Dishes.OrderByDescending(p => p.Calories * p.Weight),
                "CoockingTime" => _dbContext.Dishes.OrderByDescending(p => p.CoockingTime),
                _ => GetAll()
            };
        }

        public IQueryable<Dish> Sort(IQueryable<Dish> dishes, string fieldName)
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

        public IQueryable<Dish> SortDescending(IQueryable<Dish> dishes, string fieldName)
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

        public IQueryable<Dish> Filter(FilterParamsDto filterParams)
        {
            IQueryable<Dish> dishQuery = _dbContext.Dishes;

            if (filterParams.Name != null && filterParams.Name != "")
            {
                dishQuery = dishQuery.Where(p => p.Name.Contains(filterParams.Name));
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

        public IQueryable<Dish> Filter(IQueryable<Dish> dishes, FilterParamsDto filterParams)
        {
            if (filterParams.Name != null && filterParams.Name != "")
            {
                dishes = dishes.Where(p => p.Name.Contains(filterParams.Name));
            }

            if (filterParams.MinCost != null)
            {
                dishes = dishes.Where(p => p.Cost >= filterParams.MinCost);
            }

            if (filterParams.MaxCost != null)
            {
                dishes = dishes.Where(p => p.Cost <= filterParams.MaxCost);
            }

            if (filterParams.MinWeight != null)
            {
                dishes = dishes.Where(p => p.Weight >= filterParams.MinWeight);
            }

            if (filterParams.MaxWeight != null)
            {
                dishes = dishes.Where(p => p.Weight <= filterParams.MaxWeight);
            }

            if (filterParams.MinCalories != null)
            {
                dishes = dishes.Where(p => p.Calories >= filterParams.MinCalories);
            }

            if (filterParams.MaxCalories != null)
            {
                dishes = dishes.Where(p => p.Calories <= filterParams.MaxCalories);
            }

            if (filterParams.MinCoockingTime != null)
            {
                dishes = dishes.Where(p => p.CoockingTime >= filterParams.MinCoockingTime);
            }

            if (filterParams.MaxCoockingTime != null)
            {
                dishes = dishes.Where(p => p.CoockingTime <= filterParams.MaxCoockingTime);
            }

            return dishes;
        }
    }
}
