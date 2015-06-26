helpers.number = {};

helpers.number.parse = function(value) {
   if(helpers.utils.isNull(value)) return null;
   
   value = value
      .replace(/\./g, "")
      .replace(/\,/g, ".")
      .replace(/[a-z]|\s|(\/|\*|\-|\+|\,|\%|\$|\#|\@|\!|\(|\)|\_|\?)/gi, "");

   return parseFloat(value);
};
