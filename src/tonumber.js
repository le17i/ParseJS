Parse.prototype.toNumber = function(precision) {

   var value = helpers.format.precision(this.value, precision);

   return helpers.format.thousand(value);
};
