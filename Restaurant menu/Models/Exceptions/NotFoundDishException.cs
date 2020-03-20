using System;

namespace Restaurant_menu.Models.Excaptions
{
    public class NotFoundDishException : Exception
    {
        public NotFoundDishException(string message)
            : base(message)
        { }
    }
}
