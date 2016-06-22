(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.DraftJsBlockEditor = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/json/stringify"), __esModule: true };
},{"core-js/library/fn/json/stringify":13}],2:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":14}],3:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],4:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/get-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/get-prototype-of":16}],5:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/object/set-prototype-of"), __esModule: true };
},{"core-js/library/fn/object/set-prototype-of":17}],6:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol"), __esModule: true };
},{"core-js/library/fn/symbol":18}],7:[function(require,module,exports){
module.exports = { "default": require("core-js/library/fn/symbol/iterator"), __esModule: true };
},{"core-js/library/fn/symbol/iterator":19}],8:[function(require,module,exports){
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _defineProperty = require("../core-js/object/define-property");

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
},{"../core-js/object/define-property":3}],10:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _setPrototypeOf = require("../core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = require("../core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
},{"../core-js/object/create":2,"../core-js/object/set-prototype-of":5,"../helpers/typeof":12}],11:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof2 = require("../helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
},{"../helpers/typeof":12}],12:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _iterator = require("../core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("../core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
},{"../core-js/symbol":6,"../core-js/symbol/iterator":7}],13:[function(require,module,exports){
var core  = require('../../modules/_core')
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};
},{"../../modules/_core":25}],14:[function(require,module,exports){
require('../../modules/es6.object.create');
var $Object = require('../../modules/_core').Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};
},{"../../modules/_core":25,"../../modules/es6.object.create":79}],15:[function(require,module,exports){
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};
},{"../../modules/_core":25,"../../modules/es6.object.define-property":80}],16:[function(require,module,exports){
require('../../modules/es6.object.get-prototype-of');
module.exports = require('../../modules/_core').Object.getPrototypeOf;
},{"../../modules/_core":25,"../../modules/es6.object.get-prototype-of":81}],17:[function(require,module,exports){
require('../../modules/es6.object.set-prototype-of');
module.exports = require('../../modules/_core').Object.setPrototypeOf;
},{"../../modules/_core":25,"../../modules/es6.object.set-prototype-of":82}],18:[function(require,module,exports){
require('../../modules/es6.symbol');
require('../../modules/es6.object.to-string');
require('../../modules/es7.symbol.async-iterator');
require('../../modules/es7.symbol.observable');
module.exports = require('../../modules/_core').Symbol;
},{"../../modules/_core":25,"../../modules/es6.object.to-string":83,"../../modules/es6.symbol":85,"../../modules/es7.symbol.async-iterator":86,"../../modules/es7.symbol.observable":87}],19:[function(require,module,exports){
require('../../modules/es6.string.iterator');
require('../../modules/web.dom.iterable');
module.exports = require('../../modules/_wks-ext').f('iterator');
},{"../../modules/_wks-ext":76,"../../modules/es6.string.iterator":84,"../../modules/web.dom.iterable":88}],20:[function(require,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],21:[function(require,module,exports){
module.exports = function(){ /* empty */ };
},{}],22:[function(require,module,exports){
var isObject = require('./_is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./_is-object":41}],23:[function(require,module,exports){
// false -> Array#indexOf
// true  -> Array#includes
var toIObject = require('./_to-iobject')
  , toLength  = require('./_to-length')
  , toIndex   = require('./_to-index');
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};
},{"./_to-index":68,"./_to-iobject":70,"./_to-length":71}],24:[function(require,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],25:[function(require,module,exports){
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],26:[function(require,module,exports){
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./_a-function":20}],27:[function(require,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],28:[function(require,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_fails":33}],29:[function(require,module,exports){
var isObject = require('./_is-object')
  , document = require('./_global').document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};
},{"./_global":34,"./_is-object":41}],30:[function(require,module,exports){
// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');
},{}],31:[function(require,module,exports){
// all enumerable object keys, includes symbols
var getKeys = require('./_object-keys')
  , gOPS    = require('./_object-gops')
  , pIE     = require('./_object-pie');
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};
},{"./_object-gops":55,"./_object-keys":58,"./_object-pie":59}],32:[function(require,module,exports){
var global    = require('./_global')
  , core      = require('./_core')
  , ctx       = require('./_ctx')
  , hide      = require('./_hide')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;
},{"./_core":25,"./_ctx":26,"./_global":34,"./_hide":36}],33:[function(require,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],34:[function(require,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],35:[function(require,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],36:[function(require,module,exports){
var dP         = require('./_object-dp')
  , createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./_descriptors":28,"./_object-dp":50,"./_property-desc":61}],37:[function(require,module,exports){
module.exports = require('./_global').document && document.documentElement;
},{"./_global":34}],38:[function(require,module,exports){
module.exports = !require('./_descriptors') && !require('./_fails')(function(){
  return Object.defineProperty(require('./_dom-create')('div'), 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./_descriptors":28,"./_dom-create":29,"./_fails":33}],39:[function(require,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = require('./_cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./_cof":24}],40:[function(require,module,exports){
// 7.2.2 IsArray(argument)
var cof = require('./_cof');
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};
},{"./_cof":24}],41:[function(require,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],42:[function(require,module,exports){
'use strict';
var create         = require('./_object-create')
  , descriptor     = require('./_property-desc')
  , setToStringTag = require('./_set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require('./_hide')(IteratorPrototype, require('./_wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./_hide":36,"./_object-create":49,"./_property-desc":61,"./_set-to-string-tag":64,"./_wks":77}],43:[function(require,module,exports){
'use strict';
var LIBRARY        = require('./_library')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , hide           = require('./_hide')
  , has            = require('./_has')
  , Iterators      = require('./_iterators')
  , $iterCreate    = require('./_iter-create')
  , setToStringTag = require('./_set-to-string-tag')
  , getPrototypeOf = require('./_object-gpo')
  , ITERATOR       = require('./_wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./_export":32,"./_has":35,"./_hide":36,"./_iter-create":42,"./_iterators":45,"./_library":47,"./_object-gpo":56,"./_redefine":62,"./_set-to-string-tag":64,"./_wks":77}],44:[function(require,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],45:[function(require,module,exports){
module.exports = {};
},{}],46:[function(require,module,exports){
var getKeys   = require('./_object-keys')
  , toIObject = require('./_to-iobject');
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};
},{"./_object-keys":58,"./_to-iobject":70}],47:[function(require,module,exports){
module.exports = true;
},{}],48:[function(require,module,exports){
var META     = require('./_uid')('meta')
  , isObject = require('./_is-object')
  , has      = require('./_has')
  , setDesc  = require('./_object-dp').f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require('./_fails')(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
},{"./_fails":33,"./_has":35,"./_is-object":41,"./_object-dp":50,"./_uid":74}],49:[function(require,module,exports){
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = require('./_an-object')
  , dPs         = require('./_object-dps')
  , enumBugKeys = require('./_enum-bug-keys')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require('./_dom-create')('iframe')
    , i      = enumBugKeys.length
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require('./_html').appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write('<script>document.F=Object</script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};
},{"./_an-object":22,"./_dom-create":29,"./_enum-bug-keys":30,"./_html":37,"./_object-dps":51,"./_shared-key":65}],50:[function(require,module,exports){
var anObject       = require('./_an-object')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , toPrimitive    = require('./_to-primitive')
  , dP             = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};
},{"./_an-object":22,"./_descriptors":28,"./_ie8-dom-define":38,"./_to-primitive":73}],51:[function(require,module,exports){
var dP       = require('./_object-dp')
  , anObject = require('./_an-object')
  , getKeys  = require('./_object-keys');

module.exports = require('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};
},{"./_an-object":22,"./_descriptors":28,"./_object-dp":50,"./_object-keys":58}],52:[function(require,module,exports){
var pIE            = require('./_object-pie')
  , createDesc     = require('./_property-desc')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , has            = require('./_has')
  , IE8_DOM_DEFINE = require('./_ie8-dom-define')
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = require('./_descriptors') ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};
},{"./_descriptors":28,"./_has":35,"./_ie8-dom-define":38,"./_object-pie":59,"./_property-desc":61,"./_to-iobject":70,"./_to-primitive":73}],53:[function(require,module,exports){
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = require('./_to-iobject')
  , gOPN      = require('./_object-gopn').f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

},{"./_object-gopn":54,"./_to-iobject":70}],54:[function(require,module,exports){
// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = require('./_object-keys-internal')
  , hiddenKeys = require('./_enum-bug-keys').concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":57}],55:[function(require,module,exports){
exports.f = Object.getOwnPropertySymbols;
},{}],56:[function(require,module,exports){
// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = require('./_has')
  , toObject    = require('./_to-object')
  , IE_PROTO    = require('./_shared-key')('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};
},{"./_has":35,"./_shared-key":65,"./_to-object":72}],57:[function(require,module,exports){
var has          = require('./_has')
  , toIObject    = require('./_to-iobject')
  , arrayIndexOf = require('./_array-includes')(false)
  , IE_PROTO     = require('./_shared-key')('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};
},{"./_array-includes":23,"./_has":35,"./_shared-key":65,"./_to-iobject":70}],58:[function(require,module,exports){
// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = require('./_object-keys-internal')
  , enumBugKeys = require('./_enum-bug-keys');

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};
},{"./_enum-bug-keys":30,"./_object-keys-internal":57}],59:[function(require,module,exports){
exports.f = {}.propertyIsEnumerable;
},{}],60:[function(require,module,exports){
// most Object methods by ES6 should accept primitives
var $export = require('./_export')
  , core    = require('./_core')
  , fails   = require('./_fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./_core":25,"./_export":32,"./_fails":33}],61:[function(require,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],62:[function(require,module,exports){
module.exports = require('./_hide');
},{"./_hide":36}],63:[function(require,module,exports){
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = require('./_is-object')
  , anObject = require('./_an-object');
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require('./_ctx')(Function.call, require('./_object-gopd').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};
},{"./_an-object":22,"./_ctx":26,"./_is-object":41,"./_object-gopd":52}],64:[function(require,module,exports){
var def = require('./_object-dp').f
  , has = require('./_has')
  , TAG = require('./_wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./_has":35,"./_object-dp":50,"./_wks":77}],65:[function(require,module,exports){
var shared = require('./_shared')('keys')
  , uid    = require('./_uid');
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};
},{"./_shared":66,"./_uid":74}],66:[function(require,module,exports){
var global = require('./_global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./_global":34}],67:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , defined   = require('./_defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./_defined":27,"./_to-integer":69}],68:[function(require,module,exports){
var toInteger = require('./_to-integer')
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};
},{"./_to-integer":69}],69:[function(require,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],70:[function(require,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = require('./_iobject')
  , defined = require('./_defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./_defined":27,"./_iobject":39}],71:[function(require,module,exports){
// 7.1.15 ToLength
var toInteger = require('./_to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./_to-integer":69}],72:[function(require,module,exports){
// 7.1.13 ToObject(argument)
var defined = require('./_defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./_defined":27}],73:[function(require,module,exports){
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};
},{"./_is-object":41}],74:[function(require,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],75:[function(require,module,exports){
var global         = require('./_global')
  , core           = require('./_core')
  , LIBRARY        = require('./_library')
  , wksExt         = require('./_wks-ext')
  , defineProperty = require('./_object-dp').f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};
},{"./_core":25,"./_global":34,"./_library":47,"./_object-dp":50,"./_wks-ext":76}],76:[function(require,module,exports){
exports.f = require('./_wks');
},{"./_wks":77}],77:[function(require,module,exports){
var store      = require('./_shared')('wks')
  , uid        = require('./_uid')
  , Symbol     = require('./_global').Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
},{"./_global":34,"./_shared":66,"./_uid":74}],78:[function(require,module,exports){
'use strict';
var addToUnscopables = require('./_add-to-unscopables')
  , step             = require('./_iter-step')
  , Iterators        = require('./_iterators')
  , toIObject        = require('./_to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = require('./_iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./_add-to-unscopables":21,"./_iter-define":43,"./_iter-step":44,"./_iterators":45,"./_to-iobject":70}],79:[function(require,module,exports){
var $export = require('./_export')
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: require('./_object-create')});
},{"./_export":32,"./_object-create":49}],80:[function(require,module,exports){
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', {defineProperty: require('./_object-dp').f});
},{"./_descriptors":28,"./_export":32,"./_object-dp":50}],81:[function(require,module,exports){
// 19.1.2.9 Object.getPrototypeOf(O)
var toObject        = require('./_to-object')
  , $getPrototypeOf = require('./_object-gpo');

require('./_object-sap')('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});
},{"./_object-gpo":56,"./_object-sap":60,"./_to-object":72}],82:[function(require,module,exports){
// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = require('./_export');
$export($export.S, 'Object', {setPrototypeOf: require('./_set-proto').set});
},{"./_export":32,"./_set-proto":63}],83:[function(require,module,exports){

},{}],84:[function(require,module,exports){
'use strict';
var $at  = require('./_string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
require('./_iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./_iter-define":43,"./_string-at":67}],85:[function(require,module,exports){
'use strict';
// ECMAScript 6 symbols shim
var global         = require('./_global')
  , has            = require('./_has')
  , DESCRIPTORS    = require('./_descriptors')
  , $export        = require('./_export')
  , redefine       = require('./_redefine')
  , META           = require('./_meta').KEY
  , $fails         = require('./_fails')
  , shared         = require('./_shared')
  , setToStringTag = require('./_set-to-string-tag')
  , uid            = require('./_uid')
  , wks            = require('./_wks')
  , wksExt         = require('./_wks-ext')
  , wksDefine      = require('./_wks-define')
  , keyOf          = require('./_keyof')
  , enumKeys       = require('./_enum-keys')
  , isArray        = require('./_is-array')
  , anObject       = require('./_an-object')
  , toIObject      = require('./_to-iobject')
  , toPrimitive    = require('./_to-primitive')
  , createDesc     = require('./_property-desc')
  , _create        = require('./_object-create')
  , gOPNExt        = require('./_object-gopn-ext')
  , $GOPD          = require('./_object-gopd')
  , $DP            = require('./_object-dp')
  , $keys          = require('./_object-keys')
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require('./_object-gopn').f = gOPNExt.f = $getOwnPropertyNames;
  require('./_object-pie').f  = $propertyIsEnumerable;
  require('./_object-gops').f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require('./_library')){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require('./_hide')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);
},{"./_an-object":22,"./_descriptors":28,"./_enum-keys":31,"./_export":32,"./_fails":33,"./_global":34,"./_has":35,"./_hide":36,"./_is-array":40,"./_keyof":46,"./_library":47,"./_meta":48,"./_object-create":49,"./_object-dp":50,"./_object-gopd":52,"./_object-gopn":54,"./_object-gopn-ext":53,"./_object-gops":55,"./_object-keys":58,"./_object-pie":59,"./_property-desc":61,"./_redefine":62,"./_set-to-string-tag":64,"./_shared":66,"./_to-iobject":70,"./_to-primitive":73,"./_uid":74,"./_wks":77,"./_wks-define":75,"./_wks-ext":76}],86:[function(require,module,exports){
require('./_wks-define')('asyncIterator');
},{"./_wks-define":75}],87:[function(require,module,exports){
require('./_wks-define')('observable');
},{"./_wks-define":75}],88:[function(require,module,exports){
require('./es6.array.iterator');
var global        = require('./_global')
  , hide          = require('./_hide')
  , Iterators     = require('./_iterators')
  , TO_STRING_TAG = require('./_wks')('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}
},{"./_global":34,"./_hide":36,"./_iterators":45,"./_wks":77,"./es6.array.iterator":78}],89:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderMap = exports.StringToTypeMap = exports.beforeInput = exports.Editor = undefined;

var _editor = require('./editor');

var _editor2 = _interopRequireDefault(_editor);

var _beforeinput = require('./util/beforeinput');

var _beforeinput2 = _interopRequireDefault(_beforeinput);

var _rendermap = require('./model/rendermap');

var _rendermap2 = _interopRequireDefault(_rendermap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Editor = _editor2.default;
exports.beforeInput = _beforeinput2.default;
exports.StringToTypeMap = _beforeinput.StringToTypeMap;
exports.RenderMap = _rendermap2.default;

},{"./editor":101,"./model/rendermap":103,"./util/beforeinput":104}],90:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _util = require('../util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddButton = function (_Component) {
  (0, _inherits3.default)(AddButton, _Component);

  function AddButton(props) {
    (0, _classCallCheck3.default)(this, AddButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(AddButton).call(this, props));

    _this.state = {
      style: {},
      visible: false
    };
    _this.node = null;
    _this.blockKey = '';
    _this.blockType = '';
    _this.blockLength = -1;

    _this.findNode = _this.findNode.bind(_this);
    _this.hideBlock = _this.hideBlock.bind(_this);
    return _this;
  }

  // To show + button only when text length == 0


  (0, _createClass3.default)(AddButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var editorState = newProps.editorState;

      var contentState = editorState.getCurrentContent();
      var selectionState = editorState.getSelection();

      if (!selectionState.isCollapsed() || selectionState.anchorKey !== selectionState.focusKey) {
        this.hideBlock();
        return;
      }

      var block = contentState.getBlockForKey(selectionState.anchorKey);
      var bkey = block.getKey();

      if (block.getLength() > 0) {
        this.hideBlock();
        return;
      }

      if (block.getType() !== this.blockType) {
        this.blockType = block.getType();
        if (block.getLength() === 0) {
          setTimeout(this.findNode, 0);
        }
        return;
      }

      if (this.blockKey === bkey) {
        if (block.getLength() > 0) {
          this.hideBlock();
        } else {
          this.setState({
            visible: true
          });
        }
        return;
      }

      this.blockKey = bkey;
      if (block.getLength() > 0) {
        this.hideBlock();
        return;
      }

      setTimeout(this.findNode, 0);
    }

    // Show + button regardless of block length
    // componentWillReceiveProps(newProps) {
    //   const { editorState } = newProps;
    //   const contentState = editorState.getCurrentContent();
    //   const selectionState = editorState.getSelection();
    //   if (!selectionState.isCollapsed() || selectionState.anchorKey != selectionState.focusKey) {
    //     this.hideBlock();
    //     return;
    //   }
    //   const block = contentState.getBlockForKey(selectionState.anchorKey);
    //   const bkey = block.getKey();
    //   if (block.getType() !== this.blockType) {
    //     this.blockType = block.getType();
    //     setTimeout(this.findNode, 0);
    //     return;
    //   }
    //   if (this.blockKey === bkey) {
    //     this.setState({
    //       visible: true
    //     });
    //     return;
    //   }
    //   this.blockKey = bkey;
    //   setTimeout(this.findNode, 0);
    // }

  }, {
    key: 'hideBlock',
    value: function hideBlock() {
      if (this.state.visible) {
        this.setState({
          visible: false
        });
      }
    }
  }, {
    key: 'findNode',
    value: function findNode() {
      var node = (0, _util.getSelectedBlockNode)(window);
      if (node === this.node) {
        return;
      }
      if (!node) {
        this.setState({
          visible: false
        });
        return;
      }

      // const rect = node.getBoundingClientRect()

      this.node = node;
      this.setState({
        visible: true,
        style: {
          top: node.offsetTop
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.visible) {
        return _react2.default.createElement(
          'button',
          {
            onClick: this.props.addMedia,
            className: 'add-button',
            style: this.state.style
          },
          '+'
        );
      }
      return null;
    }
  }]);
  return AddButton;
}(_react.Component);

AddButton.propTypes = {
  addMedia: _react.PropTypes.func
};

exports.default = AddButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../util":105,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],91:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var entity = _draftJs.Entity.get(props.block.getEntityAt(0));
  var data = entity.getData();
  var type = entity.getType();

  if (type === 'IMAGE') {
    return _react2.default.createElement(
      'div',
      { className: 'block-atomic-wrapper' },
      _react2.default.createElement('img', { src: data.src, role: 'presentation' }),
      _react2.default.createElement(
        'div',
        { className: 'block-atomic-controls' },
        _react2.default.createElement(
          'button',
          null,
          '×'
        )
      )
    );
  }

  if (type === 'YOUTUBE') {
    var youtubeRegexp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/; // eslint-disable-line no-useless-escape
    var match = data.src.match(youtubeRegexp);

    if (match && match[2].length === 11) {
      return _react2.default.createElement('iframe', {
        width: '560',
        height: '315',
        src: '//www.youtube.com/embed/' + match[2],
        frameBorder: '0',
        allowFullScreen: true
      });
    }

    return _react2.default.createElement(
      'p',
      null,
      'Unsupported URL format for ',
      type
    );
  }

  return _react2.default.createElement(
    'p',
    null,
    'No supported block for ',
    type
  );
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],92:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(
    'cite',
    null,
    _react2.default.createElement(_draftJs.EditorBlock, props)
  );
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],93:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_draftJs.EditorBlock, props);
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],94:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Paragraph = function (_Component) {
  (0, _inherits3.default)(Paragraph, _Component);

  function Paragraph() {
    (0, _classCallCheck3.default)(this, Paragraph);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Paragraph).apply(this, arguments));
  }

  (0, _createClass3.default)(Paragraph, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_draftJs.EditorBlock, this.props);
    }
  }]);
  return Paragraph;
}(_react.Component);

exports.default = Paragraph;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11,"draft-js":undefined}],95:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _stylebutton = require('./stylebutton');

var _stylebutton2 = _interopRequireDefault(_stylebutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockToolbar = function BlockToolbar(props) {
  var editorState = props.editorState;
  // const selection = editorState.getSelection();

  var blockType = _draftJs.RichUtils.getCurrentBlockType(editorState);

  console.log(props);

  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    props.buttons.map(function (type) {
      return _react2.default.createElement(_stylebutton2.default, {
        key: type.label,
        active: type.style === blockType,
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

BlockToolbar.propTypes = {
  editorState: _react.PropTypes.any,
  buttons: _react.PropTypes.array,
  onToggle: _react.PropTypes.func
};

exports.default = BlockToolbar;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stylebutton":99,"draft-js":undefined}],96:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _text = require('./blocks/text');

var _text2 = _interopRequireDefault(_text);

var _blockquotecaption = require('./blocks/blockquotecaption');

var _blockquotecaption2 = _interopRequireDefault(_blockquotecaption);

var _caption = require('./blocks/caption');

var _caption2 = _interopRequireDefault(_caption);

var _atomic = require('./blocks/atomic');

var _atomic2 = _interopRequireDefault(_atomic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (contentBlock) {
  var type = contentBlock.getType();
  switch (type) {
    case 'unstyled':
      return {
        component: _text2.default
      };
    case 'block-quote-caption':
      return {
        component: _blockquotecaption2.default
      };
    case 'caption':
      return {
        component: _caption2.default
      };
    case 'atomic':
      return {
        component: _atomic2.default,
        editable: false
      };
    default:
      return null;
  }
};

module.exports = exports['default'];

},{"./blocks/atomic":91,"./blocks/blockquotecaption":92,"./blocks/caption":93,"./blocks/text":94}],97:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findLinkEntities = undefined;

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findLinkEntities = exports.findLinkEntities = function findLinkEntities(contentBlock, callback) {
  contentBlock.findEntityRanges(function (character) {
    var entityKey = character.getEntity();
    return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
  }, callback);
};

exports.default = function (props) {
  var _Entity$get$getData = _draftJs.Entity.get(props.entityKey).getData();

  var url = _Entity$get$getData.url;

  return _react2.default.createElement(
    'a',
    { className: 'draft-link hint--bottom', href: url, target: '_blank' },
    props.children
  );
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"draft-js":undefined}],98:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _stylebutton = require('./stylebutton');

var _stylebutton2 = _interopRequireDefault(_stylebutton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  var currentStyle = props.editorState.getCurrentInlineStyle();

  return _react2.default.createElement(
    'div',
    { className: 'RichEditor-controls' },
    props.buttons.map(function (type) {
      return _react2.default.createElement(_stylebutton2.default, {
        key: type.style,
        active: currentStyle.has(type.style),
        label: type.label,
        onToggle: props.onToggle,
        style: type.style
      });
    })
  );
};

module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./stylebutton":99}],99:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StyleButton = function (_React$Component) {
  (0, _inherits3.default)(StyleButton, _React$Component);

  function StyleButton() {
    (0, _classCallCheck3.default)(this, StyleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(StyleButton).call(this));

    _this.onToggle = function (e) {
      e.preventDefault();
      _this.props.onToggle(_this.props.style);
    };
    return _this;
  }

  (0, _createClass3.default)(StyleButton, [{
    key: 'render',
    value: function render() {
      var className = 'RichEditor-styleButton';
      if (this.props.active) {
        className += ' RichEditor-activeButton';
      }

      return _react2.default.createElement(
        'span',
        { className: className, onMouseDown: this.onToggle },
        this.props.label
      );
    }
  }]);
  return StyleButton;
}(_react2.default.Component);

exports.default = StyleButton;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11}],100:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _draftJs = require('draft-js');

var _blocktoolbar = require('./blocktoolbar');

var _blocktoolbar2 = _interopRequireDefault(_blocktoolbar);

var _inlinetoolbar = require('./inlinetoolbar');

var _inlinetoolbar2 = _interopRequireDefault(_inlinetoolbar);

var _index = require('../util/index');

var _index2 = require('../model/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.getVisibleSelectionRect = _draftJs.getVisibleSelectionRect;

var Toolbar = function (_React$Component) {
  (0, _inherits3.default)(Toolbar, _React$Component);

  function Toolbar(props) {
    (0, _classCallCheck3.default)(this, Toolbar);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Toolbar).call(this, props));

    _this.state = {
      showURLInput: false,
      urlInputValue: '',
      style: {
        top: 0,
        left: 0
      }
    };

    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onChange = _this.onChange.bind(_this);
    _this.showLinkInput = _this.showLinkInput.bind(_this);

    _this.hasDimension = false;
    _this.rect = {};
    _this.forceHide = false;
    return _this;
  }

  (0, _createClass3.default)(Toolbar, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var editorState = newProps.editorState;

      if (!newProps.editorEnabled) {
        return;
      }

      var selectionState = editorState.getSelection();
      if (selectionState.isCollapsed()) {
        if (this.state.showURLInput) {
          this.setState({
            showURLInput: false
          });
        }
        return;
      }

      var nativeSelection = (0, _index.getSelection)(window);
      if (!nativeSelection.rangeCount) {
        return;
      }

      // const node = nativeSelection.getRangeAt(0).startContainer.parentNode
      var rect = (0, _index.getSelectionRect)(nativeSelection);

      var editor = {
        element: document.getElementsByClassName('public-DraftEditor-content')[0].children[0]
      };
      editor.rect = editor.element.getBoundingClientRect();

      var body = {
        element: document.body
      };
      body.rect = body.element.getBoundingClientRect();

      if (this.hasDimension) {
        var left = rect.left - editor.rect.left + (rect.width - this.rect.width) / 2;
        if (rect.width >= editor.rect.width) {
          left = (editor.rect.width - this.rect.width) / 2;
        }
        left = Math.max(Math.min(left, editor.rect.width - this.rect.width), 0);

        console.log(rect.top);

        var top = rect.top - editor.rect.top - this.rect.height - 15;
        if (rect.top <= this.rect.height + 25) {
          top = rect.top - editor.rect.top + 35;
        }

        this.setState({
          style: {
            top: top,
            left: left,
            width: this.rect.width
          }
        });
      } else {
        var _left = (editor.rect.width - this.rect.width) / 2;
        var _top = rect.top - editor.rect.top + 35;

        this.setState({
          style: {
            top: _top,
            left: _left,
            width: 'auto'
          }
        });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.forceHide = false;
      var node = _reactDom2.default.findDOMNode(this);
      if (!node) {
        return;
      }
      this.rect = _reactDom2.default.findDOMNode(this).getBoundingClientRect();
      this.hasDimension = true;
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var _this2 = this;

      if (e.which === 13) {
        e.preventDefault();
        e.stopPropagation();
        this.props.setLink(this.state.urlInputValue);
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this2.props.focus();
        });
      } else if (e.which === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
          showURLInput: false,
          urlInputValue: ''
        }, function () {
          return _this2.props.focus();
        });
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({
        urlInputValue: e.target.value
      });
    }
  }, {
    key: 'showLinkInput',
    value: function showLinkInput(e) {
      var _this3 = this;

      var direct = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      if (!direct) {
        e.preventDefault();
        e.stopPropagation();
      }
      var editorState = this.props.editorState;

      var selection = editorState.getSelection();
      if (selection.isCollapsed()) {
        this.props.focus();
        return;
      }
      var currentBlock = (0, _index2.getCurrentBlock)(editorState);
      var selectedEntity = '';
      var linkFound = false;
      currentBlock.findEntityRanges(function (character) {
        var entityKey = character.getEntity();
        selectedEntity = entityKey;
        return entityKey !== null && _draftJs.Entity.get(entityKey).getType() === 'LINK';
      }, function (start, end) {
        var selStart = selection.getAnchorOffset();
        var selEnd = selection.getFocusOffset();
        if (selection.getIsBackward()) {
          selStart = selection.getFocusOffset();
          selEnd = selection.getAnchorOffset();
        }
        if (start === selStart && end === selEnd) {
          linkFound = true;

          var _Entity$get$getData = _draftJs.Entity.get(selectedEntity).getData();

          var url = _Entity$get$getData.url;

          _this3.setState({
            showURLInput: true,
            urlInputValue: url
          }, function () {
            setTimeout(function () {
              _this3.refs.urlinput.focus();
              _this3.refs.urlinput.select();
            }, 0);
          });
        }
      });
      if (!linkFound) {
        this.setState({
          showURLInput: true
        }, function () {
          setTimeout(function () {
            _this3.refs.urlinput.focus();
          }, 0);
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var editorState = _props.editorState;
      var editorEnabled = _props.editorEnabled;
      var _state = this.state;
      var showURLInput = _state.showURLInput;
      var urlInputValue = _state.urlInputValue;
      var style = _state.style;

      if (!editorEnabled || editorState.getSelection().isCollapsed()) {
        return null;
      }
      if (showURLInput) {
        return _react2.default.createElement(
          'div',
          { className: 'editor-toolbar', style: style },
          _react2.default.createElement(
            'div',
            { className: 'RichEditor-controls', style: { display: 'block' } },
            _react2.default.createElement('input', {
              ref: 'urlinput',
              type: 'text',
              className: 'url-input',
              onKeyDown: this.onKeyDown,
              onChange: this.onChange,
              placeholder: 'Press ENTER or ESC',
              value: urlInputValue
            })
          )
        );
      }
      return _react2.default.createElement(
        'div',
        { className: 'editor-toolbar', style: style },
        _react2.default.createElement(_blocktoolbar2.default, {
          editorState: editorState,
          onToggle: this.props.toggleBlockType,
          buttons: BLOCK_BUTTONS
        }),
        _react2.default.createElement(_inlinetoolbar2.default, {
          editorState: editorState,
          onToggle: this.props.toggleInlineStyle,
          buttons: INLINE_BUTTONS
        }),
        _react2.default.createElement(
          'div',
          { className: 'RichEditor-controls' },
          _react2.default.createElement(
            'a',
            { className: 'RichEditor-linkButton', href: '#', onClick: this.showLinkInput },
            '#'
          )
        )
      );
    }
  }]);
  return Toolbar;
}(_react2.default.Component);

exports.default = Toolbar;


var BLOCK_BUTTONS = [{ label: 'H1', style: 'header-one' }, { label: 'H2', style: 'header-two' }, { label: 'H3', style: 'header-three' }, { label: 'N', style: 'unstyled' }, { label: 'Q', style: 'blockquote' }, { label: 'QC', style: 'block-quote-caption' }, { label: 'CP', style: 'caption' }, { label: 'UL', style: 'unordered-list-item' }, { label: 'OL', style: 'ordered-list-item' }];

var INLINE_BUTTONS = [{ label: _react2.default.createElement(
    'b',
    null,
    'B'
  ), style: 'BOLD' }, { label: _react2.default.createElement(
    'i',
    null,
    'I'
  ), style: 'ITALIC' }, { label: _react2.default.createElement(
    'u',
    null,
    'U'
  ), style: 'UNDERLINE' }, { label: _react2.default.createElement(
    'strike',
    null,
    'S'
  ), style: 'STRIKETHROUGH' }, { label: _react2.default.createElement(
    'pre',
    { style: { display: 'inline' } },
    'C'
  ), style: 'CODE' }, { label: 'Hi', style: 'HIGHLIGHT' }];
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../model/index":102,"../util/index":105,"./blocktoolbar":95,"./inlinetoolbar":98,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11,"draft-js":undefined,"react-dom":undefined}],101:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _addbutton = require('./components/addbutton');

var _addbutton2 = _interopRequireDefault(_addbutton);

var _toolbar = require('./components/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _customrenderer = require('./components/customrenderer');

var _customrenderer2 = _interopRequireDefault(_customrenderer);

var _util = require('./util');

var _rendermap = require('./model/rendermap');

var _rendermap2 = _interopRequireDefault(_rendermap);

var _keybinding = require('./util/keybinding');

var _keybinding2 = _interopRequireDefault(_keybinding);

var _beforeinput = require('./util/beforeinput');

var _beforeinput2 = _interopRequireDefault(_beforeinput);

var _model = require('./model');

var _link = require('./components/entities/link');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'yellow'
  },
  'CODE': {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',
    margin: '4px 0',
    fontSize: '0.9em',
    padding: '1px 3px',
    color: '#555',
    backgroundColor: '#fcfcfc',
    border: '1px solid #ccc',
    borderBottomColor: '#bbb',
    borderRadius: 3,
    boxShadow: 'inset 0 -1px 0 #bbb'
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'block block-quote RichEditor-blockquote';
    case 'unstyled':
      return 'block block-paragraph';
    case 'atomic':
      return 'block block-atomic';
    case 'caption':
      return 'block block-caption';
    case 'block-quote-caption':
      return 'block block-quote RichEditor-blockquote block-quote-caption';
    default:
      return 'block';
  }
}

var DraftBlockEditor = function (_React$Component) {
  (0, _inherits3.default)(DraftBlockEditor, _React$Component);

  function DraftBlockEditor(props) {
    (0, _classCallCheck3.default)(this, DraftBlockEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(DraftBlockEditor).call(this, props));

    _this.toggleBlockType = function (blockType) {
      _this.onChange(_draftJs.RichUtils.toggleBlockType(_this.state.editorState, blockType));
    };

    _this.toggleInlineStyle = function (inlineStyle) {
      _this.onChange(_draftJs.RichUtils.toggleInlineStyle(_this.state.editorState, inlineStyle));
    };

    _this.toggleEdit = function () {
      _this.setState({
        editorEnabled: !_this.state.editorEnabled
      });
    };

    var decorator = new _draftJs.CompositeDecorator([{
      strategy: _link.findLinkEntities,
      component: _link2.default
    }]);
    _this.state = {
      editorState: _draftJs.EditorState.createEmpty(decorator),
      showURLInput: false,
      editorEnabled: true,
      urlValue: ''
    };
    if (props.value) {
      _this.state.editorState = _draftJs.EditorState.push(_this.state.editorState, (0, _draftJs.convertFromRaw)(props.value));
    }
    _this.focus = function () {
      return _this.refs.editor.focus();
    };
    _this.onChange = function (editorState) {
      window.editorState = editorState;
      _this.setState({ editorState: editorState });
    };

    _this.onClick = function () {
      if (!_this.state.editorEnabled) {
        _this.setState({
          editorEnabled: true
        }, function () {
          _this.focus();
        });
      }
    };

    _this.logData = _this.logData.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onTab = _this.onTab.bind(_this);
    _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
    _this.handleBeforeInput = _this.handleBeforeInput.bind(_this);
    _this.handleReturn = _this.handleReturn.bind(_this);
    _this.loadSavedData = _this.loadSavedData.bind(_this);
    _this.setLink = _this.setLink.bind(_this);
    _this.addMedia = _this.addMedia.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DraftBlockEditor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.focus();
    }
  }, {
    key: 'onTab',
    value: function onTab(e) {
      var editorState = this.state.editorState;

      var newEditorState = _draftJs.RichUtils.onTab(e, editorState, 2);
      if (newEditorState !== editorState) {
        this.onChange(newEditorState);
      }
    }
  }, {
    key: 'logData',
    value: function logData(e) {
      global.RAW = (0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent());
      global.SEL = this.state.editorState.getSelection();

      console.log('RAW', global.RAW);
      console.log('SEL', global.SEL.toJS());
    }
  }, {
    key: 'setLink',
    value: function setLink(url) {
      var _this2 = this;

      var editorState = this.state.editorState;

      var selection = editorState.getSelection();
      var entityKey = null;
      if (url !== '') {
        entityKey = _draftJs.Entity.create('LINK', 'MUTABLE', { url: url });
      }
      this.setState({
        editorState: _draftJs.RichUtils.toggleLink(editorState, selection, entityKey)
      }, function () {
        setTimeout(function () {
          return _this2.refs.editor.focus();
        }, 0);
      });
    }
  }, {
    key: 'addMedia',
    value: function addMedia() {
      var src = window.prompt('Enter a URL');
      if (!src) {
        return;
      }
      var entityKey = _draftJs.Entity.create('YOUTUBE', 'IMMUTABLE', { src: src });
      this.onChange(_draftJs.AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey, ' '));
    }
  }, {
    key: 'handleDroppedFiles',
    value: function handleDroppedFiles(selection, files) {
      console.log(selection.toJS());
      console.log(files);
    }
  }, {
    key: 'handleKeyCommand',
    value: function handleKeyCommand(command) {
      // console.log(command);
      if (command === 'editor-save') {
        window.localStorage['editor'] = (0, _stringify2.default)((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        window.localStorage['tmp'] = (0, _stringify2.default)((0, _draftJs.convertToRaw)(this.state.editorState.getCurrentContent()));
        return true;
      } else if (command === 'showlinkinput') {
        if (this.refs.toolbar) {
          this.refs.toolbar.showLinkInput(null, true);
        }
        return true;
      } else if (command === 'add-new-block') {
        var _editorState = this.state.editorState;

        this.onChange((0, _model.addNewBlock)(_editorState, 'blockquote'));
        return true;
      } else if (command === 'load-saved-data') {
        this.loadSavedData();
        return true;
      }
      var editorState = this.state.editorState;

      var block = (0, _model.getCurrentBlock)(editorState);
      if (command.indexOf('changetype:') == 0) {
        var newBlockType = command.split(':')[1];
        var currentBlockType = block.getType();
        if (currentBlockType == 'atomic' || currentBlockType == 'media') {
          return false;
        }
        if (currentBlockType == 'blockquote' && newBlockType == 'caption') {
          newBlockType = 'block-quote-caption';
        } else if (currentBlockType == 'block-quote-caption' && newBlockType == 'caption') {
          newBlockType = 'blockquote';
        }
        this.onChange(_draftJs.RichUtils.toggleBlockType(editorState, newBlockType));
        return true;
      }
      var newState = _draftJs.RichUtils.handleKeyCommand(editorState, command);
      if (newState) {
        this.onChange(newState);
        return true;
      }
      return false;
    }
  }, {
    key: 'handleBeforeInput',
    value: function handleBeforeInput(str) {
      return this.props.beforeInput(this.state.editorState, str, this.onChange, this.props.stringToTypeMap);
    }
  }, {
    key: 'handleReturn',
    value: function handleReturn(e) {
      if (e.shiftKey) {
        this.setState({
          editorState: _draftJs.RichUtils.insertSoftNewline(this.state.editorState)
        });
        return true;
      }
      return false;
    }
  }, {
    key: 'loadSavedData',
    value: function loadSavedData() {
      var _this3 = this;

      var data = window.localStorage.getItem('editor');
      if (data === null) {
        console.log('No data found.');
        return;
      }
      try {
        var blockData = JSON.parse(data);
        console.log(blockData);
        this.setState({
          editorState: _draftJs.EditorState.push(this.state.editorState, (0, _draftJs.convertFromRaw)(blockData))
        }, function () {
          return _this3.refs.editor.focus();
        });
      } catch (e) {
        window.er = e;
        console.log(e);
        console.log('Could not load data.');
      }
    }
  }, {
    key: 'loadCustomData',
    value: function loadCustomData(data) {
      var _this4 = this;

      this.setState({
        editorState: _draftJs.EditorState.push(this.state.editorState, data)
      }, function () {
        return _this4.refs.editor.focus();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state;
      var editorState = _state.editorState;
      var showURLInput = _state.showURLInput;
      var editorEnabled = _state.editorEnabled;
      var urlValue = _state.urlValue;
      // console.log(this.props);

      global.editor = this;

      return _react2.default.createElement(
        'div',
        { className: 'RichEditor-root' },
        _react2.default.createElement(
          'div',
          { className: 'RichEditor-editor' },
          _react2.default.createElement(_draftJs.Editor, {
            ref: 'editor',
            editorState: editorState,
            blockRendererFn: _customrenderer2.default,
            blockStyleFn: getBlockStyle,
            onChange: this.onChange,
            onTab: this.onTab,
            blockRenderMap: this.props.blockRenderMap,
            handleKeyCommand: this.handleKeyCommand,
            handleBeforeInput: this.handleBeforeInput,
            handleDroppedFiles: this.handleDroppedFiles,
            handleReturn: this.handleReturn,
            customStyleMap: styleMap,
            readOnly: !editorEnabled,
            keyBindingFn: _keybinding2.default,
            placeholder: 'Write your story',
            spellCheck: false
          }),
          editorEnabled ? _react2.default.createElement(_addbutton2.default, { editorState: editorState, addMedia: this.addMedia }) : null,
          _react2.default.createElement(_toolbar2.default, {
            ref: 'toolbar',
            editorState: editorState,
            toggleBlockType: this.toggleBlockType,
            toggleInlineStyle: this.toggleInlineStyle,
            editorEnabled: editorEnabled,
            setLink: this.setLink,
            focus: this.focus
          })
        )
      );
    }
  }]);
  return DraftBlockEditor;
}(_react2.default.Component);

var renderMap = (0, _immutable.Map)();

DraftBlockEditor.defaultProps = {
  beforeInput: _beforeinput2.default,
  stringToTypeMap: _beforeinput.StringToTypeMap,
  blockRenderMap: _rendermap2.default
};

exports.default = DraftBlockEditor;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/addbutton":90,"./components/customrenderer":96,"./components/entities/link":97,"./components/toolbar":100,"./model":102,"./model/rendermap":103,"./util":105,"./util/beforeinput":104,"./util/keybinding":106,"babel-runtime/core-js/json/stringify":1,"babel-runtime/core-js/object/get-prototype-of":4,"babel-runtime/helpers/classCallCheck":8,"babel-runtime/helpers/createClass":9,"babel-runtime/helpers/inherits":10,"babel-runtime/helpers/possibleConstructorReturn":11,"draft-js":undefined,"immutable":undefined}],102:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetBlockWithType = exports.addNewBlock = exports.getCurrentBlock = undefined;

var _draftJs = require('draft-js');

var getCurrentBlock = exports.getCurrentBlock = function getCurrentBlock(editorState) {
  var selectionState = editorState.getSelection();
  var contentState = editorState.getCurrentContent();
  var block = contentState.getBlockForKey(selectionState.getStartKey());
  return block;
};

var addNewBlock = exports.addNewBlock = function addNewBlock(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var selectionState = editorState.getSelection();
  if (!selectionState.isCollapsed()) {
    console.log('selection not collapsed');
    return editorState;
  }
  var contentState = editorState.getCurrentContent();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var currentBlock = getCurrentBlock(editorState);
  if (!currentBlock) {
    console.log('no current block');
    return editorState;
  }
  if (currentBlock.getLength() == 0) {
    if (currentBlock.getType() == newType) {
      console.log('same block types');
      return editorState;
    }
    var newBlock = currentBlock.merge({
      type: newType
    });
    var newContentState = contentState.merge({
      blockMap: blockMap.set(key, newBlock),
      selectionAfter: selectionState
    });
    return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
  } else {}
  console.log('block length > 0');
  return editorState;
};

var resetBlockWithType = exports.resetBlockWithType = function resetBlockWithType(editorState) {
  var newType = arguments.length <= 1 || arguments[1] === undefined ? 'unstyled' : arguments[1];

  var contentState = editorState.getCurrentContent();
  var selectionState = editorState.getSelection();
  var key = selectionState.getStartKey();
  var blockMap = contentState.getBlockMap();
  var block = blockMap.get(key);
  var newText = "";
  var text = block.getText();
  if (block.getLength() >= 2) {
    newText = text.substr(1);
  }
  var newBlock = block.merge({
    text: newText,
    type: newType
  });
  var newContentState = contentState.merge({
    blockMap: blockMap.set(key, newBlock),
    selectionAfter: selectionState.merge({
      anchorOffset: 0,
      focusOffset: 0
    })
  });
  return _draftJs.EditorState.push(editorState, newContentState, 'change-block-type');
};

},{"draft-js":undefined}],103:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _draftJs = require('draft-js');

var RenderMap = (0, _immutable.Map)({
  unstyled: {
    element: 'div'
  },
  caption: {
    element: 'cite'
  },
  'block-quote-caption': {
    element: 'blockquote'
  }
}).merge(_draftJs.DefaultDraftBlockRenderMap);

exports.default = RenderMap;
module.exports = exports['default'];

},{"draft-js":undefined,"immutable":undefined}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringToTypeMap = undefined;

var _index = require('../model/index');

var _ramda = require('ramda');

var indexedForEach = (0, _ramda.addIndex)(_ramda.forEach);

var StringToTypeMap = exports.StringToTypeMap = {
  '--': 'blockquote:block-quote-caption:caption',
  '//': 'blockquote',
  '""': 'blockquote',
  '\'\'': 'blockquote',
  '*.': 'unordered-list-item',
  '1.': 'ordered-list-item',
  '##': 'header-two',
  '==': 'unstyled'
};

exports.default = function (editorState, str, callback) {
  var mapping = arguments.length <= 3 || arguments[3] === undefined ? StringToTypeMap : arguments[3];

  var selection = editorState.getSelection();
  var block = (0, _index.getCurrentBlock)(editorState);
  var blockType = block.getType();
  var blockLength = block.getLength();

  if (selection.getAnchorOffset() > 1 || blockLength > 1) {
    return false;
  }
  var blockTo = mapping[block.getText()[0] + str];
  if (!blockTo) {
    return false;
  }
  var finalType = blockTo.split(':');
  if (finalType.length < 1 || finalType.length > 3) {
    return false;
  }
  var fType = finalType[0];

  {
    if (blockType === (0, _ramda.last)(finalType)) {
      return false;
    }
    fType = (0, _ramda.last)(finalType);

    indexedForEach(function (type, index, typeList) {
      if (blockType === type) {
        fType = typeList[index + 1];
      }
    }, (0, _ramda.dropLast)(1, finalType));
  }

  // if (finalType.length == 1) {
  //   if (blockType == finalType[0]) {
  //     return false;
  //   }
  // } else if (finalType.length == 2) {
  //   if (blockType == finalType[1]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   }
  // } else if (finalType.length == 3) {
  //   if (blockType == finalType[2]) {
  //     return false;
  //   }
  //   if (blockType == finalType[0]) {
  //     fType = finalType[1];
  //   } else {
  //     fType = finalType[2];
  //   }
  // }

  callback((0, _index.resetBlockWithType)(editorState, fType));
  return true;
};

},{"../model/index":102,"ramda":undefined}],105:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getSelectionRect = exports.getSelectionRect = function getSelectionRect(selected) {
  var _rect = selected.getRangeAt(0).getBoundingClientRect();
  var rect = _rect && _rect.top ? _rect : selected.getRangeAt(0).getClientRects()[0]; //selected.getRangeAt(0).getBoundingClientRect()
  if (!rect) {
    if (selected.anchorNode && selected.anchorNode.getBoundingClientRect) {
      rect = selected.anchorNode.getBoundingClientRect();
      rect.isEmptyline = true;
    } else {
      return null;
    }
  }
  return rect;
};

// export const getSelectedNode = (selection) => {};

var getSelection = exports.getSelection = function getSelection(root) {
  var t = null;
  if (root.getSelection) {
    t = root.getSelection();
  } else if (root.document.getSelection) {
    t = root.document.getSelection();
  } else if (root.document.selection) {
    t = root.document.selection.createRange().text;
  }
  return t;
};

var getSelectedBlockNode = exports.getSelectedBlockNode = function getSelectedBlockNode(root) {
  var selection = root.getSelection();
  if (selection.rangeCount == 0) {
    return null;
  }
  window.sel = selection;
  var node = selection.getRangeAt(0).startContainer;
  // console.log(node);
  do {
    if (node.getAttribute && node.getAttribute('data-block') === 'true') {
      return node;
    }
    node = node.parentNode;
    // console.log(node);
  } while (node !== null);
  return null;
};

},{}],106:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var hasCommandModifier = _draftJs.KeyBindingUtil.hasCommandModifier;

exports.default = function (e) {
  if (hasCommandModifier(e) && e.keyCode == 83) {
    return 'editor-save';
  }
  if (e.altKey === true) {
    if (e.shiftKey === true) {
      switch (e.keyCode) {
        // Alt + Shift + A
        case 65:
          return 'add-new-block';
        // Alt + Shift + D
        case 68:
          return 'load-saved-data';
        case 69:
          return 'toggle-edit-mode';
        default:
          return (0, _draftJs.getDefaultKeyBinding)(e);
      }
    }
    switch (e.keyCode) {
      // 1
      case 49:
        return 'changetype:ordered-list-item';
      // @
      case 50:
        return 'showlinkinput';
      // #
      case 51:
        return 'changetype:header-three';
      // *
      case 56:
        return 'changetype:unordered-list-item';

      //S
      // case 83: return 'editor-save';
      // = +
      // case 187: return 'add-new-block';
      // <
      case 188:
        return 'changetype:caption';
      // // -
      // case 189: return 'changetype:caption';
      // >
      case 190:
        return 'changetype:unstyled';
      // "
      case 222:
        return 'changetype:blockquote';

      default:
        return (0, _draftJs.getDefaultKeyBinding)(e);
    }
  }
  return (0, _draftJs.getDefaultKeyBinding)(e);
};

module.exports = exports['default'];

},{"draft-js":undefined}]},{},[89])(89)
});