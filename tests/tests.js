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
         var percent = parse("10,00000").toNumber(2);
         expect(percent).toEqual("10,00");
      });

      it("The precision method eliminates the numbers further, using a number to text.", function() {
         var percent = parse("10").toNumber(2);
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

      it("The precision method inserts more numbers, using a integer number.", function() {
         var percent = parse(10.00000).toNumber(2);
         expect(percent).toEqual("10,00");
      });

      it("The precision method eliminates the numbers further, using a number to text.", function() {
         var percent = parse(10).toNumber(2);
         expect(percent).toEqual("10,00");
      });
   });
});
