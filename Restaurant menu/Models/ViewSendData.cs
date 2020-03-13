using System.Collections.Generic;

namespace Restaurant_menu.Models
{
    public class ViewSendData
    {
        public List<Dish> Dishes { get; set; }
        public List<ViewError> Errors { get; set; }
    }
}
