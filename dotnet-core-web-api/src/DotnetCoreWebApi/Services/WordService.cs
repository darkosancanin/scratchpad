using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace DotnetCoreWebApi.Services
{
    public interface IWordService
    {
        string ReverseWords(string sentence);
        string SortWords(string sentence);
    }

    public class WordService: IWordService
    {
        private readonly char[] _punctuationAndSpace = { ' ', '.', '"', '?', '!', ',' };

        public string ReverseWords(string sentence)
        {
            return PerformActionOnSentence(sentence, Array.Reverse);
        }

        public string SortWords(string sentence)
        {
            return PerformActionOnSentence(sentence, c => Array.Sort(c, (x, y) => char.ToLower(x) - char.ToLower(y)));
        }

        private string PerformActionOnSentence(string sentence, Action<char[]> action)
        {
            string pattern = "(" + String.Join("|", _punctuationAndSpace.Select(d => Regex.Escape(d.ToString())).ToArray()) + ")";
            var words = Regex.Split(sentence, pattern);
            for (int i = 0; i < words.Length; i++)
            {
                var word = words[i];
                var charArray = word.ToCharArray();
                if (word.Length > 1 && !_punctuationAndSpace.Any(x => x == charArray[0]))
                    action(charArray);
                words[i] = new string(charArray);
            }
            return string.Join("", words);
        }
    }
}
