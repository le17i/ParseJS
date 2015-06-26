helpers.format = {};

helpers.format.precision = function(value, precision) {
   if(value === undefined) return null;

   return parseFloat(value.toString())
      .toFixed(precision || 0)
      .replace(/\./g, Parse.config.decimalSeparator);
};

helpers.format.thousand = function(value) {
   if(helpers.utils.isNull(value)) return null;

   value = value.toString();
   replace = ["$1", Parse.config.thousandSeparator].join("");

   if(value.indexOf(Parse.config.decimalSeparator) > -1) {
      auxA = value.substring(0, value.indexOf(Parse.config.decimalSeparator));

      auxA = auxA.replace(helpers.regex.decimal, replace);
      value = [auxA, value.substring(value.indexOf(Parse.config.decimalSeparator) + 1, value.length)].join(Parse.config.decimalSeparator);
   }
   else {
      value = value.replace(helpers.regex.decimal, replace);
   }

   return value;
};
