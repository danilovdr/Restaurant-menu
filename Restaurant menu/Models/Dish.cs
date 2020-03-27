using System;

namespace Restaurant_menu.Models
{
    public class Dish
    {
        public long Id { get; set; }
        public DateTime CreateDate { get; set; }
        public string Name { get; set; }
        public string Ingredients { get; set; }
        public string Description { get; set; }
        public int? Cost { get; set; }
        public int? Weight { get; set; }
        public int? Calories { get; set; }
        public int? CoockingTime { get; set; }
    }
}
