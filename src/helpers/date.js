helpers.date = {
   // List of date formats
   regex: [
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
   ],

   // Try convert the value on date object. If failed, return false
   parse: function (value) {

      if(value === undefined) return null;

      if(value instanceof Date) {
         return value;
      }

      var date = null, replace, regex, a = 0, length = helpers.date.regex.length;

      value = value.toString();

      for(a; a < length; a++) {
         regex = helpers.date.regex[a];

         if(value.match(regex.test)) {

            if(regex.replace.indexOf("-") > -1){
               replace = value.replace(regex.test, regex.replace).split("-");
               date = new Date(parseInt(replace[0]), parseInt(--replace[1]), parseInt(replace[2]));
            }
            else {
               replace = parseInt(value.replace(regex.test, regex.replace));
               date = new Date(replace);
            }

            break;
         }
      }

      return date;
   },

   // Transform the date object to format string
   format: function(format, value) {
      var date = helpers.date.parse(value);

      if(date === false || date === undefined) return false;

      var day = date.getDate().toString().replace(/(?=(^\d{1}$))/g, "0");
      var month = (date.getMonth() + 1).toString().replace(/(?=(^\d{1}$))/g, "0");

      var formatDate = format
         .replace(/dd/gi, day)
         .replace(/mm/gi, month)
         .replace(/yyyy/gi, date.getFullYear());

      return formatDate;
   }
};
