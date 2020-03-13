namespace Restaurant_menu.Models
{
    public class ViewReceiveData
    {
        public string FieldNameSort { get; set; }
        public bool SortByAscending { get; set; }
        public string FilterName { get; set; }
        public int? FilterMinCost { get; set; }
        public int? FilterMaxCost { get; set; }
        public int? FilterMinWeight { get; set; }
        public int? FilterMaxWeight { get; set; }
        public int? FilterMinCalories { get; set; }
        public int? FilterMaxCalories { get; set; }
        public int? FilterMinCoockingTime { get; set; }
        public int? FilterMaxCoockingTime { get; set; }
    }
}
