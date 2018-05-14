'use strict';

require('babel-core/register');

require('babel-polyfill');

var _sample = require('./sample.js');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var runSamples = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var samples;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([(0, _sample.runSample)(), (0, _sample.average)()]).catch(function (e) {
              console.error('Error occureed', e);
            });

          case 2:
            samples = _context.sent;

            console.log('Sample 1 ------->predict -------->' + samples[0].print());
            console.log('Sample 2 ------->tidy -----------> ' + samples[1].print());

          case 5:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function runSamples() {
    return _ref.apply(this, arguments);
  };
}();

runSamples().catch(function (e) {
  console.error('Unhandled exception', e);
});