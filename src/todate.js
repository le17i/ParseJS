Parse.prototype.toDate = function() {
   var date = helpers.date.matchDate(this.value);

   return (!date) ? "Invalid Date" : date;
};
