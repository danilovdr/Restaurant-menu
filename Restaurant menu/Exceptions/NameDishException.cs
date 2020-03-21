using System;

namespace Restaurant_menu.Exceptions
{
    public class NameDishException : Exception
    {
        public NameDishException(string message)
            :base(message)
        { }
    }
}
