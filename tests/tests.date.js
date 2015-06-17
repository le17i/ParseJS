describe("Date Tests", function() {
   it("Transform the string in Date Object", function() {
      var date = parse("10/12/2014").toDate();
      expect(date).toEqual(new Date("2014-12-10"));
   });
});
