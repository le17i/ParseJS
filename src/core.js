var Parse = function(value) {
   if(!(this instanceof Parse)) return new Parse(value);

   this.value = value;
   return this;
};

Parse.config = {
   currencySymbol: "R$",
   decimalSeparator: ",",
   thousandSeparator: ".",
};

Parse.set = function(key, value) {
   if(!key || !value || !(key in parse.config)) return;

   parse.config[key] = value;
};
