'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _es5KarmaModelJs = require('../es5/karma.model.js');

var _es5KarmaModelJs2 = _interopRequireDefault(_es5KarmaModelJs);

var KarmaMongoose = (function () {
	function KarmaMongoose(config) {
		_classCallCheck(this, KarmaMongoose);

		this._config = config;
	}

	_createClass(KarmaMongoose, [{
		key: 'init',
		value: function init() {

			_mongoose2['default'].connect(this._config.db);

			var db = _mongoose2['default'].connection;

			db.on('error', console.error.bind(console, 'connection error...'));

			db.once('open', function callback() {
				console.log('db opened');
			});
		}
	}]);

	return KarmaMongoose;
})();

exports['default'] = KarmaMongoose;
;
module.exports = exports['default'];
//# sourceMappingURL=karmamongoose.js.map