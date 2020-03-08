using APICRUD.DAL.DTO;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace APICRUD.DAL.DAO
{
    public class CountryDAO : DAOBase
    {
        private CountryDTO GetCountryDTO(SqlDataReader reader)
        {
            return new CountryDTO
            {
                Id = reader[reader.GetOrdinal("id")] as int? ?? default,
                Name = reader[reader.GetOrdinal("name")] as string
            };
        }

        private string selectAllQuery = @"
            select *
            from country
        ";

        public IEnumerable<CountryDTO> GetAll()
        {
            var result = new List<CountryDTO>();
            var reader = GetReader(selectAllQuery);
            while (reader.Read())
            {
                result.Add(GetCountryDTO(reader));
            }
            reader.Close();
            return result;
        }

        public CountryDTO GetById(int id)
        {
            var result = new CountryDTO();
            var query = @$"{selectAllQuery}
                            where id = {id}";
            var reader = GetReader(query);
            if (reader.Read())
            {
                result = GetCountryDTO(reader);
            }
            reader.Close();
            return result;
        }

        public int Insert(CountryDTO country)
        {
            var query = @$"insert into country(id,name)
                          select max(id)+1,'{country.Name}'
		                  from country";
            return GetNonQueryResponse(query);
        }

        public int Update(CountryDTO country)
        {
            var query = @$"update country
                           set name='{country.Name}'
		                   where id={country.Id}";
            return GetNonQueryResponse(query);
        }

        public int Delete(CountryDTO country)
        {
            var query = @$"delete country
		                   where id={country.Id}";
            return GetNonQueryResponse(query);
        }
    }
}
