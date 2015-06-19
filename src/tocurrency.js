Parse.prototype.toCurrency = function() {

   var value = helpers.format.precision(this.value, 2);
   value = helpers.format.thousand(value);

   return (value === null) ? "Invalid value" : [Parse.config.currencySymbol, value].join("");
};
