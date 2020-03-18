using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Restaurant_menu.Models.Excaptions
{
    public class NotFoundDishException : Exception
    {
        public NotFoundDishException(string message)
            : base(message)
        { }
    }
}
