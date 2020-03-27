using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using Restaurant_menu.Models.DTO;
using System;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Restaurant_menu.Models.ViewModels;
using Restaurant_menu.Excaptions;

namespace Restaurant_menu.ControllerBase
{
    [ApiController]
    [Route("api/[controller]")]
    public class DishController : Controller
    {
        public DishController(IDishService dishService)
        {
            _dishService = dishService;
        }

        private IDishService _dishService;

        [HttpGet("{id}")]
        public IActionResult GetDish(long id)
        {
            Dish dish;

            try
            {
                dish = _dishService.GetDish(id);
            }
            catch (NotFoundDishException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

            return Json(dish);
        }

        [HttpPost]
        public IActionResult GetDishes(GetDishesParamsDto getDishesParams)
        {
            DishViewModel viewModel;

            try
            {
                viewModel = _dishService.GetDishes(getDishesParams);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

            return Json(viewModel);
        }

        [HttpPut]
        public IActionResult Create(Dish dish)
        {
            Validate(dish);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Dish createdDish;

            try
            {
                createdDish = _dishService.CreateDish(dish);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

            return Json(createdDish);
        }

        //Спросить об этом
        [HttpPost("{id}")]
        public IActionResult Update(long id, Dish dish)
        {
            dish.Id = id;
            Validate(dish);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Dish updatedDish;

            try
            {
                updatedDish = _dishService.UpdateDish(dish);
            }
            catch (NotFoundDishException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }

            return Json(updatedDish);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            try
            {
                _dishService.DeleteDish(id);
            }
            catch (NotFoundDishException)
            {
                NotFound();
            }
            catch (Exception ex)
            {
                StatusCode(500, ex.Message);
            }

            return Ok();
        }

        private ModelStateDictionary Validate(Dish dish)
        {
            if (dish == null)
            {
                ModelState.AddModelError("Dish", "Блюдо равняется null");
            }

            if (string.IsNullOrWhiteSpace(dish.Name))
            {
                ModelState.AddModelError("Name", "Имя не должно быть пустым");
            }
            else if (dish.Name.Length > 255)
            {
                ModelState.AddModelError("Name", "Длина имени не должна быть больше 255 символов");
            }

            if (string.IsNullOrWhiteSpace(dish.Ingredients))
            {
                ModelState.AddModelError("Ingredients", "Состав не должен быть пустым");
            }

            if (string.IsNullOrWhiteSpace(dish.Description))
            {
                ModelState.AddModelError("Description", "Описание не должно быть пустым");
            }
            else if (dish.Description.Length > 500)
            {
                ModelState.AddModelError("Description", "Длина описания не должна быть больше 500 символов");
            }

            if (dish.Cost == null)
            {
                ModelState.AddModelError("Cost", "Цена должна быть числом");
            }
            else if (dish.Cost <= 0)
            {
                ModelState.AddModelError("Cost", "Цена должна быть больше нуля");
            }

            if (dish.Weight == null)
            {
                ModelState.AddModelError("Weight", "Вес должен быть числом");
            }
            else if (dish.Weight <= 0)
            {
                ModelState.AddModelError("Weight", "Вес должен быть больше нуля");
            }

            if (dish.Calories == null)
            {
                ModelState.AddModelError("Calories", "Калорийность должна быть числом");
            }
            else if (dish.Calories <= 0)
            {
                ModelState.AddModelError("Calories", "Калорийность должна быть больше нуля");
            }

            if (dish.CoockingTime == null)
            {
                ModelState.AddModelError("CoockingTime", "Время приготовления должно быть числом");
            }
            else if (dish.CoockingTime <= 0)
            {
                ModelState.AddModelError("CoockingTime", "Время приготовления должно быть больше нуля");
            }

            return ModelState;
        }
    }
}
