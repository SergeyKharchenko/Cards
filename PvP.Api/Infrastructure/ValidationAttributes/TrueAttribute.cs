using System.ComponentModel.DataAnnotations;

namespace PvP.Api.Infrastructure.ValidationAttributes
{
    internal class TrueAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            return value is bool && (bool)value;
        }
    }
}