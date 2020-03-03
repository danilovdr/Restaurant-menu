using System.Collections.Generic;

namespace Restaurant_menu.Models
{
    public class IngredientDish
    {
        public int Id { get; set; }
        public List<Dish> Dishes { get; set; }
        public List<Ingredients> Ingredients { get; set; }
        public double Gram { get; set; }
    }
}
