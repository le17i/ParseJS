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

Parse.prototype.toDate = function() {
   return helpers.date.parse(this.value);
};

Parse.prototype.formatDate = function(format) {
   return helpers.date.format(format, this.value);
};

Parse.prototype.isDate = function() {
   return helpers.date.parse(this.value) !== null ? true : false;
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
   // List of date formats
   regex: [
      {
         test: /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/g,
         replace: '$3-$2-$1T00:00:00-02:00'
      },
      {
         test:/(\d{4})[-|\/|\.](\d{2})[-|\/|\.](\d{2})/g,
         replace: '$1-$2-$3T00:00:00-02:00'
      },
      {
         test:/\/Date\((-?\d+)\)\//g,
         replace: '$1'
      }
   ],

   // Try convert the value on date object. If failed, return false
   parse: function (value) {

      if(value === 'undefined') return null;

      var date = null, replace, regex, a = 0, length = helpers.date.regex.length;

      for(a; a < length; a++) {
         regex = helpers.date.regex[a];

         if(value.match(regex.test)) {

            replace = (regex.replace.indexOf("-") > -1) ?
               value.replace(regex.test, regex.replace) : parseInt(value.replace(regex.test, regex.replace));
               
            date = new Date(replace);

            break;
         }
      }

      return date;
   },

   // Transform the date object to format string
   format: function(format, value) {
      var date = helpers.date.parse(value);

      if(!date) return false;

      var formatDate = format
         .replace(/dd/gi, date.getDate())
         .replace(/mm/gi, date.getMonth() + 1)
         .replace(/yyyy/gi, date.getFullYear());

      return formatDate;
   }
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
