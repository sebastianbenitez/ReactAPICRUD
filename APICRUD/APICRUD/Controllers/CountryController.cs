using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using APICRUD.DAL.DAO;
using APICRUD.DAL.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APICRUD.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private CountryDAO countryDAO;
        public CountryController()
        {
            countryDAO = new CountryDAO();
        }

        
        [HttpGet]
        public IEnumerable<CountryDTO> Get()
        {
            return countryDAO.GetAll();
        }

        
        [HttpGet("{id}")]
        public CountryDTO Get(int id)
        {
            return countryDAO.GetById(id);
        }

        [HttpPost]
        public ActionResult Post([FromBody] CountryDTO country)
        {
            try
            {
                var resp = countryDAO.Insert(country);
                return Ok(resp <= 0 ? "Ningun registro Afectado" : "Insercion exitosa");
            }
            catch (Exception e)
            {
                return BadRequest($"Error al insertar: {e.Message}");
            }
        }

        [HttpPut]
        public ActionResult Put([FromBody] CountryDTO country)
        {
            try
            {
                var resp = countryDAO.Update(country);
                return Ok(resp <= 0 ? "Ningun registro Afectado" : "Edicion exitosa");
            }
            catch (Exception e)
            {
                return BadRequest($"Error al editar: {e.Message}");
            }
        }

        [HttpDelete]
        public ActionResult Delete([FromBody] CountryDTO country)
        {
            try
            {
                var resp = countryDAO.Delete(country);
                return Ok(resp <= 0 ? "Ningun registro Afectado" : "Eliminacion exitosa");
            }
            catch (Exception e)
            {
                return BadRequest($"Error al eliminar: {e.Message}");
            }
        }
    }
}