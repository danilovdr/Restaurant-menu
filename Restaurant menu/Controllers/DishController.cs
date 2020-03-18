using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Models;
using Restaurant_menu.Services.Interfaces;
using Restaurant_menu.Models.DTO;
using System;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Restaurant_menu.Models.Excaptions;

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
        public IActionResult GetAll([FromQuery] SortParamsDto sortParams, [FromQuery] FilterParamsDto filterParams)
        {
            if (sortParams.FieldName == null)
            {
                var dishes = _dishService.Filter(filterParams);
                return Json(dishes);
            }
            else
            {
                var dishes = _dishService.FilterAndSort(filterParams, sortParams);
                return Json(dishes);
            }
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
                BadRequest(ex.Message);
            }

            return Ok();
        }

        private ModelStateDictionary Validate(Dish dish)
        {
            if (string.IsNullOrWhiteSpace(dish.Name))
            {
                ModelState.AddModelError("Name", "Name is null or empty or white space");
            }
            else if (dish.Name.Length > 255)
            {
                ModelState.AddModelError("Name", "Name length is over 255 symbols");
            }

            if (string.IsNullOrWhiteSpace(dish.Description))
            {
                ModelState.AddModelError("Description", "Description is null or empty or white space");
            }
            else if (dish.Description.Length > 500)
            {
                ModelState.AddModelError("Description", "Description length is over 500 symbols");
            }

            if (dish.Cost == null)
            {
                ModelState.AddModelError("Cost", "Cost is null");
            }
            else if (dish.Cost < 0)
            {
                ModelState.AddModelError("Cost", "Cost is less than zero");
            }

            if (dish.Weight == null)
            {
                ModelState.AddModelError("Weight", "Weight is null");
            }
            else if (dish.Weight < 0)
            {
                ModelState.AddModelError("Weight", "Weight is less than zero");
            }

            if (dish.Calories == null)
            {
                ModelState.AddModelError("Calories", "Calories is null");
            }
            else if (dish.Calories < 0)
            {
                ModelState.AddModelError("Calories", "Calories is less than zero");
            }

            if (dish.CoockingTime == null)
            {
                ModelState.AddModelError("CoockingTime", "CoockingTime is null");
            }
            else if (dish.CoockingTime < 0)
            {
                ModelState.AddModelError("CoockingTime", "CoockingTime is less than zero");
            }

            return ModelState;
        }
    }
}
