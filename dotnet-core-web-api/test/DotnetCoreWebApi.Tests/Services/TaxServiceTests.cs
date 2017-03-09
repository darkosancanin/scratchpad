using DotnetCoreWebApi.Services;
using Xunit;

namespace DotnetCoreWebApi.Tests.Services
{
    public class TaxServiceTests
    {
        [Fact]
        public void CalculateAfterTaxIncome_Should_Set_BaseSalary()
        {
            var taxService = new TaxService();
            Assert.Equal(85000, taxService.CalculateAfterTaxIncome(85000).BaseSalary);
            Assert.Equal((decimal)85000.55, taxService.CalculateAfterTaxIncome((decimal)85000.55).BaseSalary);
        }

        [Fact]
        public void CalculateAfterTaxIncome_Should_Calculate_Superannuation() 
        {
            var taxService = new TaxService();
            Assert.Equal(8075, taxService.CalculateAfterTaxIncome(85000).Superannuation);
            Assert.Equal((decimal)8075.05, taxService.CalculateAfterTaxIncome((decimal) 85000.55).Superannuation);
        }

        [Fact]
        public void CalculateAfterTaxIncome_Should_Calculate_Medicare_Tax()
        {
            var taxService = new TaxService();
            Assert.Equal(0, taxService.CalculateAfterTaxIncome(21000).Taxes.Medicare);
            Assert.Equal(1700, taxService.CalculateAfterTaxIncome(85000).Taxes.Medicare);
            Assert.Equal((decimal)366.44, taxService.CalculateAfterTaxIncome((decimal)25000.44).Taxes.Medicare);
            Assert.Equal((decimal)1700.01, taxService.CalculateAfterTaxIncome((decimal)85000.55).Taxes.Medicare);
        }

        [Fact]
        public void CalculateAfterTaxIncome_Should_Calculate_Income_Tax()
        {
            var taxService = new TaxService();
            Assert.Equal(0, taxService.CalculateAfterTaxIncome(15000).Taxes.Income);
            Assert.Equal(532, taxService.CalculateAfterTaxIncome(21000).Taxes.Income);
            Assert.Equal(19172, taxService.CalculateAfterTaxIncome(85000).Taxes.Income);
            Assert.Equal(19172, taxService.CalculateAfterTaxIncome((decimal)85000.55).Taxes.Income);
            Assert.Equal(1292, taxService.CalculateAfterTaxIncome((decimal)25000.44).Taxes.Income);
            Assert.Equal(63232, taxService.CalculateAfterTaxIncome(200000).Taxes.Income);
        }

        [Fact]
        public void CalculateAfterTaxIncome_Should_Calculate_Total_Tax()
        {
            var taxService = new TaxService();
            Assert.Equal(0, taxService.CalculateAfterTaxIncome(15000).Taxes.Total);
            Assert.Equal(532, taxService.CalculateAfterTaxIncome(21000).Taxes.Total);
            Assert.Equal(20872, taxService.CalculateAfterTaxIncome(85000).Taxes.Total);
            Assert.Equal(20872, taxService.CalculateAfterTaxIncome((decimal)85000.55).Taxes.Total);
            Assert.Equal(1658, taxService.CalculateAfterTaxIncome((decimal)25000.55).Taxes.Total);
            Assert.Equal(67232, taxService.CalculateAfterTaxIncome(200000).Taxes.Total);
        }

        [Fact]
        public void CalculateAfterTaxIncome_Should_Calculate_After_Income_Tax()
        {
            var taxService = new TaxService();
            Assert.Equal(15000, taxService.CalculateAfterTaxIncome(15000).PostTaxIncome);
            Assert.Equal(20468, taxService.CalculateAfterTaxIncome(21000).PostTaxIncome);
            Assert.Equal(64128, taxService.CalculateAfterTaxIncome(85000).PostTaxIncome);
            Assert.Equal((decimal)64128.55, taxService.CalculateAfterTaxIncome((decimal)85000.55).PostTaxIncome);
            Assert.Equal((decimal)23342.55, taxService.CalculateAfterTaxIncome((decimal)25000.55).PostTaxIncome);
            Assert.Equal(132768, taxService.CalculateAfterTaxIncome(200000).PostTaxIncome);
        }
    }
}
