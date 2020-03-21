using System;

namespace Restaurant_menu.Excaptions
{
    public class NotFoundDishException : Exception
    {
        public NotFoundDishException(string message)
            : base(message)
        { }
    }
}
