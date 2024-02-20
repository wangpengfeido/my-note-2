/**
 * 继承。
 * 最主要的是令 `subClass.prototype.__proto__ = superClass.prototype` 。
 * 且 `subClass.prototype.constructor = subClass`。(这个除了规范没什么用)
 * 且 `subClass.__proto__ = superClass`。
 */
function _inherits(subClass, superClass) {
  // 不是类，退出
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }

  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  // subClass.prototype.__proto__ = superClass.prototype
  // subClass.prototype.constructor = subClass
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });

  Object.defineProperty(subClass, 'prototype', { writable: false });

  // subClass.__proto__ = superClass
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

/**
 * 创建 super 函数，即返回一个调用 superClass。
 * super 函数调用时的 this 一般绑定到 subClass 上，并且返回 subClass。
 * @param Derived 一般是子类。
 */
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    // 取到 superClass。见`_inherits`函数，`subClass.__proto__ = superClass`。
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/** 是否支持 Reflect.construct */
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/** 获取对象的 `__proto__` */
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _typeof(obj) {
  '@babel/helpers - typeof';
  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}

/**
 * 创建类
 * @param Constructor 原函数
 * @param protoProps 定义在 prototype 上的属性
 */
function _createClass(Constructor, protoProps, staticProps) {
  // 属性被定义在 constructor.prototype 上。
  //（constructor 就是原函数。f.prototype.constructor === f。f.prototype.constructor.prototype === f.prototype。）
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  // 静态属性直接定义在 constructor 上。
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', { writable: false });
  return Constructor;
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string');
  return _typeof(key) === 'symbol' ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== 'object' || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default');
    if (_typeof(res) !== 'object') return res;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (hint === 'string' ? String : Number)(input);
}
var A = /*#__PURE__*/ (function () {
  function A() {
    _classCallCheck(this, A);
  }
  _createClass(A, [
    {
      key: 'a1',
      value: function a1() {},
    },
  ]);
  return A;
})();
var B = /*#__PURE__*/ (function (_A) {
  _inherits(B, _A);
  var _super = _createSuper(B);
  function B() {
    var _this;
    _classCallCheck(this, B);
    _this = _super.call(this);
    _this.p = 1;
    return _this;
  }
  _createClass(B, [
    {
      key: 'a2',
      value: function a2() {},
    },
  ]);
  return B;
})(A);
