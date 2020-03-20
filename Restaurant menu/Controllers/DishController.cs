using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using Restaurant_menu.Models.DTO;
using System;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Restaurant_menu.Models.Excaptions;
using Restaurant_menu.Models.ViewModels;

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

        [HttpGet]
        public IActionResult GetAll([FromQuery] PageParamsDto pageParams, [FromQuery] SortParamsDto sortParams, [FromQuery] FilterParamsDto filterParams)
        {
            DishViewModel viewModel = new DishViewModel();

            Dish[] dishes = _dishService.FilterAndSort(filterParams, sortParams);

            if (pageParams.NumberPage != null && pageParams.SizePage != null)
            {
                viewModel.FilteredDishes = dishes.Length;
                viewModel.TotalPages = _dishService.GetTotalPages(dishes.Length, (int)pageParams.SizePage);
                dishes = _dishService.GetPage(dishes, pageParams);
            }
            else
            {
                viewModel.FilteredDishes = dishes.Length;
                viewModel.TotalPages = 0;
            }

            viewModel.Dishes = dishes;
            viewModel.CountAllDishes = _dishService.GetCountDishes();
            return Json(viewModel);
        }

        [HttpGet("{id}")]
        public IActionResult Get(long id)
        {
            Dish dish;

            try
            {
                dish = _dishService.GetById(id);
            }
            catch (NotFoundDishException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Json(dish);
        }

        [HttpPost]
        public IActionResult Update(Dish dish)
        {
            Validate(dish);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _dishService.UpdateDish(dish);
            }
            catch (NotFoundDishException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }

        [HttpPut]
        public IActionResult Create(Dish dish)
        {
            Validate(dish);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _dishService.CreateDish(dish);
            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] long id)
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
                BadRequest(ex.Message);
            }

            return Ok();
        }

        private ModelStateDictionary Validate(Dish dish)
        {
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
            else if (dish.Cost < 0)
            {
                ModelState.AddModelError("Cost", "Цена должна быть больше нуля");
            }

            if (dish.Weight == null)
            {
                ModelState.AddModelError("Weight", "Вес должен быть числом");
            }
            else if (dish.Weight < 0)
            {
                ModelState.AddModelError("Weight", "Вес должен быть больше нуля");
            }

            if (dish.Calories == null)
            {
                ModelState.AddModelError("Calories", "Калорийность должна быть числом");
            }
            else if (dish.Calories < 0)
            {
                ModelState.AddModelError("Calories", "Калорийность должна быть больше нуля");
            }

            if (dish.CoockingTime == null)
            {
                ModelState.AddModelError("CoockingTime", "Время приготовления должно быть числом");
            }
            else if (dish.CoockingTime < 0)
            {
                ModelState.AddModelError("CoockingTime", "Время приготовления должно быть больше нуля");
            }

            return ModelState;
        }
    }
}
