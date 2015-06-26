Parse.prototype.toCurrency = function() {

   auxA = helpers.format.precision(this.value, 2);
   auxA = helpers.format.thousand(auxA);

   return (auxA === null) ? "Invalid value" : [Parse.config.currencySymbol, auxA].join("");
};
