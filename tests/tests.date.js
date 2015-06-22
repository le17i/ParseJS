describe("Date Tests", function() {
   describe("Parse strings to date", function() {
      it("Transform the string (dd/mm/yyyy) in Date Object", function() {
         var date = parse("10/02/2014").toDate();
         expect(date).toEqual(new Date("2014", "01", "10"));
      });

      it("Transform the string (dd-mm-yyyy) in Date Object", function() {
         var date = parse("10-02-2014").toDate();
         expect(date).toEqual(new Date("2014", "01", "10"));
      });

      it("Transform the string (dd.mm.yyyy) in Date Object", function() {
         var date = parse("10.02.2014").toDate();
         expect(date).toEqual(new Date("2014", "01", "10"));
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

      it("Transform the ASP.NET JSON Date in Date Object", function() {
         var date = parse('/Date(1418176800000)/').toDate();
         expect(date).toEqual(new Date("2014", "11", "10"));
      });
   });

   describe("Format date to string", function() {
      it("Format date to dd.mm.yyyy, with day < 10", function() {
         var date = parse("01/02/2014").formatDate("dd.mm.yyyy");
         expect(date).toEqual("01.02.2014");
      });

      it("Format date to dd.mm.yyyy, with month < 10", function() {
         var date = parse("10/02/2014").formatDate("dd.mm.yyyy");
         expect(date).toEqual("10.02.2014");
      });

      it("Format date to dd.mm.yyyy, using a date object", function() {
         var date = parse(new Date("2014", "01", "10")).formatDate("dd.mm.yyyy");
         expect(date).toEqual("10.02.2014");
      });
   });

   describe("Validates if is date format", function() {
      it("To be valid: 10/12/2014", function() {
         var date = parse("10/12/2014").isDate();
         expect(date).toBe(true);
      });

      it("To be valid: 10-12-2014", function() {
         var date = parse("10-12-2014").isDate();
         expect(date).toBe(true);
      });

      it("To be valid: 10.12.2014", function() {
         var date = parse("10.12.2014").isDate();
         expect(date).toBe(true);
      });

      it("To be valid: ASP.NET JSON Date", function() {
         var date = parse('/Date(1418176800000)/').isDate();
         expect(date).toBe(true);
      });

      it("To be invalid: 10.lala.2014", function() {
         var date = parse("10.lala.2014").isDate();
         expect(date).toBe(false);
      });
   });
});
