namespace Restaurant_menu.Models.ViewModels
{
    public class DishViewModel
    {
        public Dish[] Dishes { get; set; }
        public int FilteredDishes { get; set; }
        public int TotalPages { get; set; }
        public int CountAllDishes { get; set; }
    }
}
