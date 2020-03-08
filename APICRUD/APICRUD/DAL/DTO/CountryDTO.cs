using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace APICRUD.DAL.DTO
{
    public class CountryDTO
    {
        public CountryDTO()
        {
            Name = "";
        }
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
