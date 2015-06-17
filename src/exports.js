/**
*  Exports ParseJS
*/
if(typeof module !== "undefined" && module.exports) {
   module.exports = Parse;
}

if(typeof define === 'function' && define.amd) {
   define("parse", [], function() {
      return Parse;
   });
}

global.parse = Parse;

}(typeof window !== "undefined" ? window : this));
