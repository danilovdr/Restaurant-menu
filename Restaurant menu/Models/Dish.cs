﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Restaurant_menu.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public DateTime Adding { get; set; }
        [MaxLength(250)]
        public string Name { get; set; }
        public string Description { get; set; }
        public int Cost { get; set; }
        public double Gram { get; set; }
        public double Calories100Gram { get; set; }
        public int CoockingTimeMinutes { get; set; }
    }
}