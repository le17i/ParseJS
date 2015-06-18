Parse.prototype.toDate = function() {
   return helpers.date.parse(this.value);
};

Parse.prototype.formatDate = function(format) {
   return helpers.date.format(format, this.value);
};

Parse.prototype.isDate = function() {
   return helpers.date.parse(this.value) !== null ? true : false;
};
