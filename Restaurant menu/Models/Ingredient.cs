namespace Restaurant_menu.Models
{
    public class Ingredient
    {
        public long Id { get; set; }
        public string Name { get; set; }

        public long DishId { get; set; }
        public Dish Dish { get; set; }
    }
}
