module.exports = function() {

	var definedConstants = {};
	var format = require('util').format;

	var self = {
		define: function(name, value) {
			name = name.toString();
			if (typeof value == 'undefined') {
				throw new TypeError("define() expects 2-nd parameter.");
			}
			if (self.defined(name)) {
				throw new Error(format("Constant '%s' already defined.", name));
			}
			definedConstants[name] = value;
			return value;
		},

		constant: function(name) {
			name = name.toString();
			var result = name;
			if (self.defined(name)) {
				result = definedConstants[name];
			}
			return result;
		},

		defined: function(name) {
			name = name.toString();
			return definedConstants.hasOwnProperty(name);
		}
	};

	return self;
}();