helpers.date = {
   // List of date formats
   regex: [
      {
         test: /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/,
         format: 'dd-mm-yyyy'
      },
      {
         test:/(\d{4})[-|\/|\.](\d{2})[-|\/|\.](\d{2})/,
         format: 'yyyy-mm-dd'
      }
   ],

   // Try convert the value on date object. If failed, return false
   matchDate: function (value) {

      if(value === 'undefined') return false;

      var date = false, a = 0, length = helpers.date.regex.length, regex, dateArray;

      for(a; a < length; a++) {
         regex = helpers.date.regex[a];

         if(value.match(regex.test)) {

            dateArray = value.match(regex.test).splice(1);

            if(regex.format == 'dd-mm-yyyy') {
               dateArray = dateArray.reverse();
            }
            
            date = new Date(dateArray[0], --dateArray[1], dateArray[2]);

            break;
         }
      }

      return date;
   },
};
