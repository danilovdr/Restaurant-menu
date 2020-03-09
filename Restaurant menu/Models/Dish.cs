using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Restaurant_menu.Models
{
    public class Dish
    {
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        [MaxLength(250)]
        public string Name { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public int Weight { get; set; }
        public int Calories { get; set; }
        public int CoockingTime { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }
}
