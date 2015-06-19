Parse.prototype.toPercent = function(precision) {

   var value = helpers.format.precision(this.value, precision);
   value = helpers.format.thousand(value);

   return (value === null) ? "Invalid value" : [value, "%"].join("");
};
