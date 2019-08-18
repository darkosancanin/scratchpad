using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace aws_serverless
{
    public class Blog
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTime CreatedTimestamp { get; set; }
    }
}
