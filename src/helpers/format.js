helpers.format = {
   precision: function(value, precision) {
      if(!value || !precision) return null;

      value = value.toString();

      var v = parseFloat(value).toFixed(precision);
      v = v.replace(/\./g, ",");
      return v;
   },

   thousand: function(value) {
      if(!value) return null;

      var v = value.toString();
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
