using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DotnetCoreWebApi.Model
{
    public class CalculatedPay
    {
        public decimal BaseSalary { get; set; }
        public decimal Superannuation { get; set; }
        public TaxBreakdown Taxes { get; set; }
        public decimal PostTaxIncome { get; set; }

        public CalculatedPay(decimal baseSalary, decimal superannuation, TaxBreakdown taxes)
        {
            BaseSalary = baseSalary;
            Superannuation = superannuation;
            Taxes = taxes;
            PostTaxIncome = baseSalary - taxes.Total;
        }
    }

    public class TaxBreakdown
    {
        public decimal Income { get; private set; }
        public decimal Medicare { get; private set; }
        public decimal Total { get; private set; }

        public TaxBreakdown(decimal income, decimal medicare)
        {
            this.Income = income;
            this.Medicare = medicare;
            this.Total = Math.Round(income + medicare);
        }
    }
}
