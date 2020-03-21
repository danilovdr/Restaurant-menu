using System;

namespace Restaurant_menu.Exceptions
{
    public class GetPageException : Exception
    {
        public GetPageException(string message)
            :base(message)
        { }
    }
}
