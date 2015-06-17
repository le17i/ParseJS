helpers.date = {
   regex: [
      /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/
   ],
   matchDate: function (value) {

      if(value === 'undefined') return false;

      var date = false, a = 0, length = helpers.date.regex.length;

      for(a; a < length; a++) {
         if(value.match(a)) {
            date = new Date(
               Data.UTC.appy(
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
