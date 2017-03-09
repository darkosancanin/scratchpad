using System;
using System.Collections.Generic;
using DotnetCoreWebApi.Model;

namespace DotnetCoreWebApi.Services
{
    public interface ITaxService
    {
        CalculatedPay CalculateAfterTaxIncome(decimal annualBaseSalary);
    }

    public class TaxService: ITaxService
    {
        private readonly decimal _superannuationRate = (decimal).095;
        private readonly List<TaxBracket> _incomeTaxBrackets = new List<TaxBracket>
        {
            new TaxBracket(18201, 37000, (decimal)0.19),
            new TaxBracket(37001, 87000, (decimal)0.325),
            new TaxBracket(87001, 180000, (decimal)0.37),
            new TaxBracket(180000, decimal.MaxValue, (decimal)0.45)
        };

        public CalculatedPay CalculateAfterTaxIncome(decimal annualBaseSalary)
        {
            var superannuation = CalculateSuperannuation(annualBaseSalary);
            var income = CalculateIncomeTax(annualBaseSalary);
            var medicare = CalculateMedicare(annualBaseSalary);
            return new CalculatedPay(annualBaseSalary, superannuation, new TaxBreakdown(income, medicare));
        }

        private decimal CalculateSuperannuation(decimal annualBaseSalary)
        {
            return Math.Round(annualBaseSalary * _superannuationRate, 2);
        }

        private decimal CalculateIncomeTax(decimal annualBaseSalary)
        {
            var taxableIncome = Math.Floor(annualBaseSalary);
            decimal totalIncomeTax = 0;

            foreach (var incomeTaxBracket in _incomeTaxBrackets)
            {
                if (taxableIncome >= incomeTaxBracket.StartValue)
                {
                    var maxValueInBracket = taxableIncome < incomeTaxBracket.EndValue ? taxableIncome : incomeTaxBracket.EndValue;
                    var taxableAmountInBracket = maxValueInBracket - incomeTaxBracket.StartValue - 1;
                    var tax = taxableAmountInBracket * incomeTaxBracket.TaxRate;
                    if (tax - Math.Floor(tax) > (decimal) 0.159)
                        totalIncomeTax += Math.Ceiling(tax);
                    else
                        totalIncomeTax += Math.Floor(tax);
                }
            }

            return Math.Round(totalIncomeTax);
        }

        private decimal CalculateMedicare(decimal annualBaseSalary)
        {
            decimal medicare;
            if (annualBaseSalary <= 21336)
                medicare = 0;
            else if (annualBaseSalary > 21336 && annualBaseSalary <= 26668)
                medicare = (annualBaseSalary - 21336) * (decimal)0.10;
            else
                medicare = annualBaseSalary * (decimal)0.02;
            return Math.Round(medicare, 2);
        }
    }
}
