﻿using Microsoft.AspNetCore.Mvc;
using Restaurant_menu.Data;
using Restaurant_menu.Models;

namespace Restaurant_menu.Controllers
{
    public class DishController : Controller
    {
        private ApplicationDbContext _dbContext;

        public DishController(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost]
        public IActionResult Add([FromBody] Dish dish)
        {
            return Ok();
        }
    }
}
