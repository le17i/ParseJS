helpers.number = {
   parse: function(value) {
      var number = value
         .replace(/\./g, "")
         .replace(/\,/g, ".")
         .replace(/[a-z]|\s|(\/|\*|\-|\+|\,|\%|\$|\#|\@|\!|\(|\)|\_|\?)/gi, "");

      return parseFloat(number);
   }
};
