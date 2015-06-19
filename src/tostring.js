Parse.prototype.toString = function(precision) {

   var value = helpers.format.precision(this.value, precision);

   return (value === null) ? "Invalid value" : helpers.format.thousand(value);
};
