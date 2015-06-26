Parse.prototype.toString = function(precision) {

   auxA = helpers.format.precision(this.value, precision);

   return (auxA === null) ? "Invalid value" : helpers.format.thousand(auxA);
};
