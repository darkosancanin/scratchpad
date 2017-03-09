using DotnetCoreWebApi.Model;
using DotnetCoreWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotnetCoreWebApi.Controllers
{
    [Route("api")]
    public class TaxController : Controller
    {
        private readonly ITaxService _taxService;

        public TaxController(ITaxService taxService)
        {
            this._taxService = taxService;
        }

        [HttpGet]
        [Route("calculate-after-tax-income")]
        public CalculatedPay CalculateAfterTaxIncome(decimal annualBaseSalary)
        {
            return _taxService.CalculateAfterTaxIncome(annualBaseSalary);
        }
    }
}
