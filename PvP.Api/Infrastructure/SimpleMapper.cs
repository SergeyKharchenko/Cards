using System;
using System.Linq;
using AutoMapper;
using PvP.Api.Models;
using PvP.Api.ViewModels;

namespace PvP.Api.Infrastructure
{
    internal static class SimpleMapper
    {
        static SimpleMapper()
        {
            Mapper.CreateMap<UserVm, User>();
            Mapper.CreateMap<User, UserVm>();

            Mapper.CreateMap<CardVm, Card>()
                  .ForMember(card => card.ImageUrlsString,
                             m => m.MapFrom(card => string.Join("|", card.ImageUrls)));
            Mapper.CreateMap<Card, CardVm>()
                  .ForMember(card => card.ImageUrls,
                             m => m.MapFrom(card => card.ImageUrlsString.Split(new[] {'|'}, StringSplitOptions.RemoveEmptyEntries)));
        }

        static public TDestination Map<TSource, TDestination>(TSource source) {
            return Mapper.Map<TSource, TDestination>(source);
        } 
    }
}