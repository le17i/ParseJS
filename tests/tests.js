describe("Init the tests for ParseJS", function() {

   it("Is defined.", function() {
      expect(parse).toBeDefined();
   });
});

describe("Parse numbers to string.", function() {
   describe("Format numbers in text.", function() {

      it("Formats the number in text to percentage format.", function() {
         var percent = parse("10,00").toPercent(2);
         expect(percent).toEqual("10,00%");
      });

      it("Formats the number in text to currency format.", function() {
         var percent = parse("10,00000").toCurrency();
         expect(percent).toEqual("R$10,00");
      });

      it("The precision method inserts more numbers, using a integer number.", function() {
         var percent = parse("10,00000").toString(2);
         expect(percent).toEqual("10,00");
      });

      it("The precision method eliminates the numbers further, using a integer number.", function() {
         var percent = parse("10").toString(2);
         expect(percent).toEqual("10,00");
      });
   });

   describe("Format real numbers.", function() {

      it("Formats the integer number to percentage format.", function() {
         var percent = parse(10.00).toPercent(2);
         expect(percent).toEqual("10,00%");
      });

      it("Formats the integer number to currency format.", function() {
         var percent = parse(10.00000).toCurrency();
         expect(percent).toEqual("R$10,00");
      });

      it("The precision method inserts more numbers, using a number in text.", function() {
         var percent = parse(10.00000).toString(2);
         expect(percent).toEqual("10,00");
      });

      it("The precision method eliminates the numbers further, using a number in text.", function() {
         var percent = parse(10).toString(2);
         expect(percent).toEqual("10,00");
      });
   });
});

describe("Parse string to numbers.", function() {

   it("Parse a string('1.000') to Number.", function() {
      var percent = parse("1.000").toNumber();
      expect(percent).toEqual(1000);
   });

   it("Parse a string('1.000,2142') to Number.", function() {
      var percent = parse("1.000,2142").toNumber();
      expect(percent).toEqual(1000.2142);
   });

   it("Parse a string('12.000,214') to Number.", function() {
      var percent = parse("12.000,214").toNumber();
      expect(percent).toEqual(12000.214);
   });

   it("Parse a currency string('R$3.152,50') to Number.", function() {
      var percent = parse("R$3.152,50").toNumber();
      expect(percent).toEqual(3152.5);
   });

   it("Parse a percentage string('0,19%') to Number.", function() {
      var percent = parse("0,190%").toNumber();
      expect(percent).toEqual(0.19);
   });
});
