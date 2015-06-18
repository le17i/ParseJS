describe("Date Tests", function() {
   describe("Parse strings to date", function() {
      it("Transform the string (dd/mm/yyyy) in Date Object", function() {
         var date = parse("10/12/2014").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });

      it("Transform the string (dd-mm-yyyy) in Date Object", function() {
         var date = parse("10-12-2014").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });

      it("Transform the string (dd.mm.yyyy) in Date Object", function() {
         var date = parse("10.12.2014").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });

      it("Transform the string (yyyy/mm/dd) in Date Object", function() {
         var date = parse("2014/12/10").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });

      it("Transform the string (yyyy-mm-dd) in Date Object", function() {
         var date = parse("2014-12-10").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });

      it("Transform the string (yyyy.mm.dd) in Date Object", function() {
         var date = parse("2014.12.10").toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });
   });

   describe("Format date to string", function() {
      it("Format date to dd.mm.yyyy", function() {
         var date = parse("10/12/2014").formatDate("dd.mm.yyyy");
         expect(date).toEqual("10.12.2014");
      });
   });
});
