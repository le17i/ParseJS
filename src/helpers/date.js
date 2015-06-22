helpers.date = {
   // List of date formats
   regex: [
      {
         test: /(\d{2})[-|\/|\.](\d{2})[-|\/|\.](\d{4})/g,
         replace: '$3-$2-$1T00:00:00-02:00'
      },
      {
         test:/(\d{4})[-|\/|\.](\d{2})[-|\/|\.](\d{2})/g,
         replace: '$1-$2-$3T00:00:00-02:00'
      },
      {
         test:/\/Date\((-?\d+)\)\//g,
         replace: '$1'
      }
   ],

   // Try convert the value on date object. If failed, return false
   parse: function (value) {

      if(value === 'undefined') return null;

      if(value instanceof Date) {
         return value;
      }

      var date = null, replace, regex, a = 0, length = helpers.date.regex.length;

      value = value.toString();

      for(a; a < length; a++) {
         regex = helpers.date.regex[a];

         if(value.match(regex.test)) {

            replace = (regex.replace.indexOf("-") > -1) ?
               value.replace(regex.test, regex.replace) : parseInt(value.replace(regex.test, regex.replace));

            date = new Date(replace);

            break;
         }
      }

      return date;
   },

   // Transform the date object to format string
   format: function(format, value) {
      var date = helpers.date.parse(value);
      console.log(date);

      if(!date) return false;

      var day = date.getDate().toString().replace(/(?=(^\d{1}$))/g, "0");
      var month = (date.getMonth() + 1).toString().replace(/(?=(^\d{1}$))/g, "0");

      var formatDate = format
         .replace(/dd/gi, day)
         .replace(/mm/gi, month)
         .replace(/yyyy/gi, date.getFullYear());

      return formatDate;
   }
};
