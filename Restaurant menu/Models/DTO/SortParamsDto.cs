using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace Restaurant_menu.Models.DTO
{
    public class SortParamsDto
    {
        [BindingBehavior(BindingBehavior.Optional)]

        public string FieldName { get; set; }
        [BindingBehavior(BindingBehavior.Optional)]

        public bool ByAscending { get; set; }
    }
}
