/**
*  ParseJS Framework
*
*  Version: 1.0.0
*
*/

;(function(global) {

   "use strict";

var Parse = function(value) {
   if(!(this instanceof Parse)) return new Parse(value);

   this.value = value.toString();
   return this;
};

Parse.config = {
   currencySymbol: "R$",
   decimalSeparator: ",",
   thousandSeparator: ".",
};

Parse.set = function(key, value) {
   if(!key || !value || !parse.config.hasOwnPropery(key)) return;

   parse.config[key] = value;
};

Parse.prototype.toNumber = function(precision) {

   var value = helpers.format.precision(this.value, precision);

   return helpers.format.thousand(value);
};

Parse.prototype.toPercent = function(precision) {

   var value = helpers.format.precision(this.value, precision);
   value = helpers.format.thousand(value);

   return [value, "%"].join("");
};

Parse.prototype.toCurrency = function() {

   var value = helpers.format.precision(this.value, 2);
   value = helpers.format.thousand(value);

   return [Parse.config.currencySymbol, value].join("");
};

/**
*  Helpers Functions
*/
var helpers = {};

helpers.regex = {
   thousandsSeparator: /(\d)(?=(\d{3})+(?!\d))/g
};

helpers.format = {
   precision: function(value, precision) {
      if(!value || !precision) return "Invalid value";

      var v = value.replace(/\./g, Parse.config.decimalSeparator);

      var a, length;

      if(v.indexOf(Parse.config.decimalSeparator) > -1) {
         length = -((v.length - v.indexOf(Parse.config.decimalSeparator)) - 1) + precision;

         if(length > 0) {
            a = 0;
            for(a; a < length; a++) {
               v = [v, "0"].join("");
            }
         }
         else {
            v = v.substring(0, (v.indexOf(Parse.config.decimalSeparator) + 1) + precision);
         }
      }
      else {
         v = [v, Parse.config.decimalSeparator].join("");

         a = 0;
         for(a; a < precision; a++) {
            v = [v, "0"].join("");
         }
      }

      return v;
   },

   thousand: function(value) {
      if(!value) return "Invalid value";

      var v = value;
      var replace = ["$1", Parse.config.thousandSeparator].join("");

      if(v.indexOf(Parse.config.decimalSeparator) > -1) {
         var vInt = v.substring(0, v.indexOf(Parse.config.decimalSeparator));

         vInt = vInt.replace(helpers.regex.thousandsSeparator, replace);
         v = [vInt, v.substring(v.indexOf(Parse.config.decimalSeparator) + 1, v.length)].join(Parse.config.decimalSeparator);
      }
      else {
         v = v.replace(helpers.regex.thousandsSeparator, replace);
      }

      return v;
   }
};

helpers.date = {
   regex: [
      /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/
   ],
   matchDate: function (value) {

      if(value === 'undefined') return false;

      var date = false, a = 0, length = helpers.date.regex.length;

      for(a; a < length; a++) {
         if(value.match(a)) {
            date = new Date(
               Data.UTC.appy(
                  this,
                  value
                     .match()
                     .splice(1)
                     .reverse()
               )
            );
            break;
         }
      }

      return date;
   },
};

/**
*  Exports ParseJS
*/
if(typeof module !== "undefined" && module.exports) {
   module.exports = Parse;
}

if(typeof define === 'function' && define.amd) {
   define("parse", [], function() {
      return Parse;
   });
}

global.parse = Parse;

}(typeof window !== "undefined" ? window : this));
