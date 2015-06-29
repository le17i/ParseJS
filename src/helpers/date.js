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
      date = helpers.date.parse(value);

      if(date === false || date === undefined) return null;

      auxA = date.getDate().toString().replace(/(?=(^\d{1}$))/g, "0");
      auxB = (date.getMonth() + 1).toString().replace(/(?=(^\d{1}$))/g, "0");

      date = format
         .replace(/dd/gi, auxA)
         .replace(/mm/gi, auxB)
         .replace(/yyyy/gi, date.getFullYear());

      return date;
   };
