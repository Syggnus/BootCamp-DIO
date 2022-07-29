using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AbstraçãoRPG
{
    public class Wizard : Hero
    {
        
        public Wizard(string Name, int Level, string HeroClass)
        {
            this.Name = Name;
            this.Level = Level;
            this.HeroClass = HeroClass;
        }

        public override string Attack() 
        {
            return this.Name + "Atacou com Magia!"; 
        }

    }
}