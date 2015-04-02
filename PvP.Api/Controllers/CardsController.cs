using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using PvP.Api.Infrastructure;
using PvP.Api.Models;
using PvP.Api.ViewModels;

namespace PvP.Api.Controllers {
    public class CardsController : ApiController
    {
        [HttpPost]
        public CardVm[] Index([FromBody] int userId)
        {
            Card[] cards;
            using (var context = new DataContext())
            {
                cards = context.Cards.Where(card => card.UserId == 1).ToArray();
            }
            return cards.Select(SimpleMapper.Map<Card, CardVm>).ToArray();
        }

        [HttpPost]
        [ActionName("add")]
        public HttpResponseMessage AddCard(HttpRequestMessage request, CardVm cardVm)
        {
            if (!ModelState.IsValid)
            {
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());
            }

            Card card = SimpleMapper.Map<CardVm, Card>(cardVm);
            using (var context = new DataContext())
            {
                context.Cards.Add(card);
                context.SaveChanges();
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        private IEnumerable<string> GetErrorMessages()
        {
            return ModelState.Values.SelectMany(value => value.Errors.Select(error => error.ErrorMessage));
        }
    }
}
