"use strict";

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports"], factory);
  }
})(function (require, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var ShopifyAJAX = /*#__PURE__*/function () {
    function ShopifyAJAX() {
      _classCallCheck(this, ShopifyAJAX);
    }

    _createClass(ShopifyAJAX, null, [{
      key: "request",
      value: function () {
        var _request = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(endpoint) {
          var data,
              method,
              log,
              config,
              url,
              response,
              result,
              _args = arguments;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  data = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
                  method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';
                  log = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;
                  config = {
                    method: method,
                    credentials: 'same-origin',
                    headers: {
                      'X-Requested-With': 'XMLHttpRequest'
                    }
                  };
                  url = _URL(endpoint, data);
                  _context.next = 7;
                  return fetch(url.toString(), config);

                case 7:
                  response = _context.sent;
                  if (log) console.log(response);
                  _context.next = 11;
                  return response.json();

                case 11:
                  result = _context.sent;
                  if (log) console.log('%cResult', 'font-weight: bold;', result);

                  if (response.ok) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt("return", _objectSpread({
                    error: true
                  }, result));

                case 15:
                  return _context.abrupt("return", result);

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function request(_x) {
          return _request.apply(this, arguments);
        }

        return request;
      }()
    }, {
      key: "post",
      value: function post(endpoint, data) {
        var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return ShopifyAJAX.request(endpoint, data, 'POST', log);
      }
    }, {
      key: "get",
      value: function get(endpoint) {
        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var log = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        return ShopifyAJAX.request(endpoint, data, 'GET', log);
      }
    }]);

    return ShopifyAJAX;
  }();

  var _URL = function _URL(url) {
    for (var _len = arguments.length, parameters = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      parameters[_key - 1] = arguments[_key];
    }

    var base = window.location.origin + '/';

    if (parameters.length && parameters.slice(0, 1).every(function (str) {
      return str ? str.toString().includes('http') : false;
    })) {
      base = parameters.slice(0, 1).join('').replace(/\/$/, '') + '/';
      parameters.shift();
    }

    parameters = parameters.map(_createParams);

    if (url.includes('http')) {
      base = '';
    }

    var joiner = url.includes('?') ? '&' : '?';
    parameters = parameters.length ? joiner + parameters.map(function (v) {
      return v.toString().replace(/^[&?]/, '');
    }).join('&') : '';
    return new window.URL(base + url.replace(/^\//, '') + parameters);
  };

  var _baseType = function _baseType(v) {
    return toString.call(v).replace(/.*\s(\w+)\]/, '$1');
  };

  var _createParams = function _createParams(iterable) {
    if (!iterable) return '';

    if (typeof iterable === 'string' || iterable instanceof String || typeof iterable === 'number' || iterable instanceof Number) {
      return String(iterable);
    }

    if (iterable instanceof FormData) {
      return new URLSearchParams(iterable).toString();
    }

    if (Array.isArray(iterable) || iterable && _baseType(iterable) !== 'Object') {
      iterable = Array.from(iterable);

      try {
        iterable = Object.fromEntries(iterable);
      } catch (e) {// do nothing
      }
    }

    var getPairs = function getPairs(obj) {
      var keys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return Object.entries(obj).reduce(function (pairs, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (_typeof(value) === 'object') {
          pairs.push.apply(pairs, _toConsumableArray(getPairs(value, [].concat(_toConsumableArray(keys), [key]))));
        } else {
          pairs.push([[].concat(_toConsumableArray(keys), [key]), value]);
        }

        return pairs;
      }, []);
    };

    return getPairs(iterable).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          _ref4$ = _toArray(_ref4[0]),
          key0 = _ref4$[0],
          keysRest = _ref4$.slice(1),
          value = _ref4[1];

      return "".concat(key0).concat(keysRest.map(function (a) {
        return "[".concat(a, "]");
      }).join(''), "=").concat(value);
    }).join('&');
  };

  exports.default = ShopifyAJAX;
});
