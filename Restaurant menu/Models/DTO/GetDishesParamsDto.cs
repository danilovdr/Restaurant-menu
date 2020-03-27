using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Restaurant_menu.Models.DTO
{
    public class GetDishesParamsDto
    {
        //Pagination
        [BindingBehavior(BindingBehavior.Optional)]
        public int? SizePage { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? NumberPage { get; set; }
        //Sort
        [BindingBehavior(BindingBehavior.Optional)]
        public string FieldName { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public bool ByAscending { get; set; }
        //Filters
        [BindingBehavior(BindingBehavior.Optional)]
        public string Name { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public string Ingredients { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public string Description { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MinCost { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MaxCost { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MinWeight { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MaxWeight { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MinCalories { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MaxCalories { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MinCoockingTime { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]
        public int? MaxCoockingTime { get; set; }
    }
}
