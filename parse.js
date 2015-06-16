;(function(window, document, undefined) {

   "use strict";

   var parse = function(value) {
      if(!(this instanceof parse)) return new parse(value);

      this.value = value;
      return this;
   };

   parse.config = {
      currencySymbol: "R$",
      decimalSeparator: ",",
      thousandSeparator: ".",
   };

   parse.set = function(key, value) {
      if(!key || !value || !parse.config.hasOwnPropery(key)) return;

      parse.config[key] = value;
   };


   //parse.fn.toDate = function(format) {
   //   return format;
   //};

   parse.prototype.toPercent = function(precision) {

      var value = helpers.precisionNumber(this.value, precision);
      value = helpers.thousandsNumberSeparator(value);

      return [value, "%"].join("");
   };

   parse.prototype.toNumber = function(precision) {

      var value = helpers.format.precision(this.value, precision);

      return helpers.format.thousand(value);
   };

   parse.prototype.toCurrency = function() {

      var value = helpers.format.precision(this.value, 2);
      value = helpers.format.thousand(value);

      return [parse.config.currencySymbol, value].join("");
   };

   /**
   *  Helpers Functions
   */
   var helpers = {};

   helpers.regex = {
      thousandsSeparator: /(\d)(?=(\d{3})+(?!\d))/g
   }

   helpers.format = {
      precision: function(value, precision) {
         if(!value || !precision) return "Invalid value";

         var v = value.toString();

         if(v.indexOf(parse.config.decimalSeparator) > -1) {
            var length = -((v.length - v.indexOf(parse.config.decimalSeparator)) - 1) + precision;

            if(length > 0) {
               v = v.substring(0, (v.indexOf(parse.config.decimalSeparator) + 1) + precision);
            }
            else {
               var a = 0;
               for(a; a < length; a++) {
                  v = [v, "0"].join("");
               }
            }
         }
         else {
            v = [v, parse.config.decimalSeparator].join("");

            var a = 0;
            for(a; a < precision; a++) {
               v = [v, "0"].join("");
            }
         }

         return v;
      },

      thousand: function(value) {
         if(!value) return "Invalid value";

         var v = value.toString();
         var replace = ["$1", parse.config.thousandSeparator].join("");

         if(v.indexOf(parse.config.decimalSeparator) > -1) {
            var vInt = v.substring(0, v.indexOf(parse.config.decimalSeparator));

            vInt = vInt.replace(helpers.regex.thousandsSeparator, replace);
            v = [vInt, v.substring(v.indexOf(parse.config.decimalSeparator) + 1, v.length)].join(parse.config.decimalSeparator);
         }
         else {
            v = v.replace(helpers.regex.thousandsSeparator, replace);
         }

         return v;
      }
   };

   window.parse = parse;

})(window, document);
