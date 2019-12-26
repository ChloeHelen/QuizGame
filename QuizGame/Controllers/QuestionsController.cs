using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace QuizGame.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        [HttpGet]
        public Questions Get()
        {
            using (StreamReader r = new StreamReader("questionsdata.json"))
            {
                string json = r.ReadToEnd();
                var questions = JsonConvert.DeserializeObject<Questions>(json);
                return questions;
            }


        }

        [HttpGet("{id}", Name = "Get")]
        public Questions Get(int id)
        {
            var data = $"questions{id}data.json";
            using (StreamReader r = new StreamReader(data))
            {
                string json = r.ReadToEnd();
                var questions = JsonConvert.DeserializeObject<Questions>(json);
                return questions;
            }
        }
    }
}