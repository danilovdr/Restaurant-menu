using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Restaurant_menu.Models
{
    public class Dish
    {
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        //[Required]
        //[MaxLength(255)]
        public string Name { get; set; }
        //[Required]
        //[MaxLength(500)]
        public string Description { get; set; }
        //[Required]
        public int? Cost { get; set; }
        //[Required]
        public int? Weight { get; set; }
        //[Required]
        public int? Calories { get; set; }
        //[Required]
        public int? CoockingTime { get; set; }
        public List<Ingredient> Ingredients { get; set; }
    }
}
