/**
*  ParseJS Framework
*
*  Version: 1.0.0
*
*/

;(function(global) {

   "use strict";

   var date, replace, regex, counter, length, auxA, auxB;

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
   if(!key || !value || !parse.config.hasOwnPropery(key)) return;

   parse.config[key] = value;
};

Parse.prototype.toNumber = function() {
   return helpers.number.parse(this.value);
};

Parse.prototype.toString = function(precision) {

   auxA = helpers.format.precision(this.value, precision);

   return (auxA === null) ? "Invalid value" : helpers.format.thousand(auxA);
};

Parse.prototype.toPercent = function(precision) {

   auxA = helpers.format.precision(this.value, precision);
   auxA = helpers.format.thousand(auxA);

   return (auxA === null) ? "Invalid value" : [auxA, "%"].join("");
};

Parse.prototype.toCurrency = function() {

   auxA = helpers.format.precision(this.value, 2);
   auxA = helpers.format.thousand(auxA);

   return (auxA === null) ? "Invalid value" : [Parse.config.currencySymbol, auxA].join("");
};

Parse.prototype.toDate = function() {
   return helpers.date.parse(this.value);
};

Parse.prototype.formatDate = function(format) {
   return helpers.date.format(format, this.value);
};

Parse.prototype.isDate = function() {
   return helpers.date.parse(this.value) !== null ? true : false;
};

/**
*  Helpers Functions
*/
var helpers = {};

helpers.regex = {
   decimal: /(\d)(?=(\d{3})+(?!\d))/g
};

helpers.utils = {};

helpers.utils.isArray = function(arg) {
	return Object.prototype.toString.call(arg) === "[object Array]";
};

helpers.utils.isObject = function(arg) {
	return Object.prototype.toString.call(arg) === "[object Object]";
};

helpers.utils.isString = function(arg) {
	return Object.prototype.toString.call(arg) === "[object String]";
};

helpers.utils.isDate = function(arg) {
	return Object.prototype.toString.call(arg) === "[object Date]";
};

helpers.utils.isNull = function(arg) {
	return (arg === undefined || arg === null);
};

helpers.utils.each = function(array, callback) {

	if(helpers.utils.isArray(array)) {
		for(counter = 0, length = array.length; counter < length; counter++) {
			if(callback(array[counter], counter)) break;
		}
	}
	else if(helpers.utils.isObject(array)) {
		for(counter in array) {
			if(callback(array[counter], counter)) break;
		}
	}
};

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

helpers.date = {};

// List of date formats
helpers.date.regex = [
   {
      test: /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/g,
      replace: '$3-$2-$1'
   },
   {
      test:/(\d{4})[-|\/|\.](\d{2})[-|\/|\.](\d{2})/g,
      replace: '$1-$2-$3'
   },
   {
      test:/\/Date\((-?\d+)\)\//g,
      replace: '$1'
   }
];

// Try convert the value on date object. If failed, return false
helpers.date.parse = function (value) {

   if(value === undefined) return null;

   if(helpers.utils.isDate(value)) {
      return value;
   }

   value = value.toString();
   date = null;

   helpers.utils.each(helpers.date.regex, function(item, index) {
      if(value.match(item.test)) {

         if(item.replace.indexOf("-") > -1){
            replace = value.replace(item.test, item.replace).split("-");
            date = new Date(parseInt(replace[0]), parseInt(--replace[1]), parseInt(replace[2]));
         }
         else {
            replace = parseInt(value.replace(item.test, item.replace));
            date = new Date(replace);
         }

         return true;
      }
   });

   return date;
};

// Transform the date object to format string
helpers.date.format = function(format, value) {
   var date = helpers.date.parse(value);

   if(date === false || date === undefined) return null;

   var day = date.getDate().toString().replace(/(?=(^\d{1}$))/g, "0");
   var month = (date.getMonth() + 1).toString().replace(/(?=(^\d{1}$))/g, "0");

   var formatDate = format
      .replace(/dd/gi, day)
      .replace(/mm/gi, month)
      .replace(/yyyy/gi, date.getFullYear());

   return formatDate;
};

helpers.number = {};

helpers.number.parse = function(value) {
   if(helpers.utils.isNull(value)) return null;
   
   value = value
      .replace(/\./g, "")
      .replace(/\,/g, ".")
      .replace(/[a-z]|\s|(\/|\*|\-|\+|\,|\%|\$|\#|\@|\!|\(|\)|\_|\?)/gi, "");

   return parseFloat(value);
};

/**
*  Exports ParseJS
*/
if(typeof module !== "undefined" && module.exports) {
   module.exports = Parse;
}

if(typeof define === 'function' && define.amd) {
   define("parse", [], function() {
      return Parse;
   });
}

global.parse = Parse;

}(typeof window !== "undefined" ? window : this));
