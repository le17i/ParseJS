Parse.prototype.toPercent = function(precision) {

   auxA = helpers.format.precision(this.value, precision);
   auxA = helpers.format.thousand(auxA);

   return (auxA === null) ? "Invalid value" : [auxA, "%"].join("");
};
