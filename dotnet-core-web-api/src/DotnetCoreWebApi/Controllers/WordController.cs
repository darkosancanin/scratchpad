using DotnetCoreWebApi.Services;
using Microsoft.AspNetCore.Mvc;

namespace DotnetCoreWebApi.Controllers
{
    [Route("api")]
    public class WordController : Controller
    {
        private readonly IWordService _wordService;

        public WordController(IWordService wordsService)
        {
            this._wordService = wordsService;
        }

        [HttpGet]
        [Route("reverse-words")]
        public string ReverseWords(string sentence)
        {
            return _wordService.ReverseWords(sentence);
        }

        [HttpGet]
        [Route("sort-words")]
        public string SortWords(string sentence)
        {
            return _wordService.SortWords(sentence);
        }
    }
}
