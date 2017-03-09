using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetCoreWebApi.Model
{
    public class TaxBracket
    {
        public decimal StartValue { get; private set; }
        public decimal EndValue { get; private set; }
        public decimal TaxRate { get; private set; }

        public TaxBracket(decimal startValue, decimal endValue, decimal taxRate)
        {
            StartValue = startValue;
            EndValue = endValue;
            TaxRate = taxRate;
        }
    }
}
