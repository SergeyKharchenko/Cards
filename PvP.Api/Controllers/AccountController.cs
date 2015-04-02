using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using PvP.Api.Infrastructure;
using PvP.Api.Models;
using PvP.Api.ViewModels;

namespace PvP.Api.Controllers {
    public class AccountController : ApiController {
        [HttpPost]
        [ActionName("register")]
        public HttpResponseMessage Register(HttpRequestMessage request, UserVm userVm) {
            if (!ModelState.IsValid)
            {
                return request.CreateResponse(HttpStatusCode.BadRequest, GetErrorMessages());
            }
            using (var context = new DataContext())
            {
                context.Users.Add(SimpleMapper.Map<UserVm, User>(userVm));
                context.SaveChanges();
            }
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
        
        [HttpPost]
        [ActionName("signIn")]
        public Guid? SignIn(UserVm userVm) {
            using (var context = new DataContext())
            {
                User user = context.Users.FirstOrDefault(u => u.Email == userVm.Email && u.Password == userVm.Password);
                if (user == null)
                {
                    return null;
                }
                UserState userState = context.UserStates.FirstOrDefault(state => state.UserId == user.Id);
                Guid guid;
                if (userState == null)
                {
                    guid = Guid.NewGuid();
                    context.UserStates.Add(new UserState
                                           {
                                               UserId = user.Id,
                                               Guid = guid,
                                               LastLogIn = DateTime.Now
                                           });
                    context.SaveChanges();
                }
                else
                {
                    guid = userState.Guid;
                }
                return guid;
            }
        }

        private IEnumerable<string> GetErrorMessages()
        {
            return ModelState.Values.SelectMany(value => value.Errors.Select(error => error.ErrorMessage));
        }
    }
}
