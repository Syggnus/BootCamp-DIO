using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AbstraçãoRPG
{
    public class Hero
    {
        public string Name;
        public int Level;
        public string HeroClass;

        public Hero(string Name, int Level, string HeroClass)
        {
            this.Name = Name;
            this.Level = Level;
            this.HeroClass = HeroClass;
        }

        public virtual string Attack() 
        {
            return this.Name + "Atacou!"; 
        }

    }
}