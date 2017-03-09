using DotnetCoreWebApi.Services;
using Xunit;

namespace DotnetCoreWebApi.Tests.Services
{
    public class WordServiceTests
    {
        [Fact]
        public void ReverseWords_Should_Reverse_Letters_In_Words()
        {
            var wordService = new WordService();
            Assert.Equal("daeh eciffo si detacol", wordService.ReverseWords("head office is located"));
        }

        [Fact]
        public void ReverseWords_Should_Reverse_Apostrophes_In_Middle_Or_End()
        {
            var wordService = new WordService();
            Assert.Equal("s'XL daeh eciffo", wordService.ReverseWords("LX's head office"));
        }

        [Fact]
        public void ReverseWords_Should_Leave_Punctuation_In_Position()
        {
            var wordService = new WordService();
            Assert.Equal("detacol ni yendyS, ailartsuA.", wordService.ReverseWords("located in Sydney, Australia."));
            Assert.Equal("gnimmargorp selpmaxe?", wordService.ReverseWords("programming examples?"));
            Assert.Equal("gnimmargorp selpmaxe\"", wordService.ReverseWords("programming examples\""));
        }

        [Fact]
        public void SortWords_Should_Sort_Letters_In_Words()
        {
            var wordService = new WordService();
            Assert.Equal("adeh ceffio is acdelot", wordService.SortWords("head office is located"));
        }

        [Fact]
        public void SortWords_Should_Sort_Apostrophes()
        {
            var wordService = new WordService();
            Assert.Equal("'LsX adeh ceffio", wordService.SortWords("LX's head office"));
        }

        [Fact]
        public void SortWords_Should_Leave_Punctuation_In_Position()
        {
            var wordService = new WordService();
            Assert.Equal("'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.", wordService.SortWords("LX's head office is located in Sydney, Australia."));
            Assert.Equal("Is eht aceennst \"eHllo dlorW!\" is efnot desu in aggimmnoprr aeelmpsx?", wordService.SortWords("Is the sentance \"Hello World!\" is often used in programming examples?"));
        }
    }
}
