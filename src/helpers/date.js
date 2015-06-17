helpers.date = {
   // List of date formats
   regex: [
      /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/
   ],

   // Try convert the value on date object. If failed, return false
   matchDate: function (value) {

      if(value === 'undefined') return false;

      var date = false, a = 0, length = helpers.date.regex.length;

      for(a; a < length; a++) {
         if(value.match(a)) {
            date = new Date(
               Date.UTC.appy(
                  this,
                  value
                     .match()
                     .splice(1)
                     .reverse()
               )
            );
            break;
         }
      }

      return date;
   },
};
