using System;

namespace Restaurant_menu.Models.Exceptions
{
    public class GetPageException : Exception
    {
        public GetPageException(string message)
            :base(message)
        { }
    }
}
