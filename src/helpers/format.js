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
