Parse.prototype.toDate = function() {
   return helpers.date.matchDate(this.value);
};

Parse.prototype.formatDate = function(format) {
   return helpers.date.formatDate(format, this.value);
};
