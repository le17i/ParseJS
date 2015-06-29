	helpers.utils = {};

	helpers.utils.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Array]";
	};

	helpers.utils.isObject = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Object]";
	};

	helpers.utils.isString = function(arg) {
		return Object.prototype.toString.call(arg) === "[object String]";
	};

	helpers.utils.isDate = function(arg) {
		return Object.prototype.toString.call(arg) === "[object Date]";
	};

	helpers.utils.isNull = function(arg) {
		return (arg === undefined || arg === null);
	};

	helpers.utils.each = function(array, callback) {

		if(helpers.utils.isArray(array)) {
			for(counter = 0, length = array.length; counter < length; counter++) {
				if(callback(array[counter], counter)) break;
			}
		}
		else if(helpers.utils.isObject(array)) {
			for(counter in array) {
				if(callback(array[counter], counter)) break;
			}
		}
	};
