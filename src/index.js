// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;

const createNotEnumerableProperty = (propertyName) => {
  Object.defineProperty(Object.prototype, propertyName, {
    value: 'value',
    enumerable: false
  });
  return propertyName;
};

const createProtoMagicObject = () => {
  class magicObj {};
  magicObj.__proto__ = magicObj.prototype;
  return magicObj;
};

const incrementor = () => {
  function increase() {
    incrementor.counter++;
    return increase;
  };

  increase.toString = function() {
    return incrementor.counter++;
  };

  return increase;
};
incrementor.counter = 1;

const asyncIncrementor = () => {};

const createIncrementer = () => {
  return {
    counter: 0,

    next() {
      this.counter++;
      return this;
    },

    get value() {
      return this.counter;
    },

    [Symbol.iterator]() {
      this.counter--;
      return this.next();
    }
  };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {};

const getDeepPropertiesCount = (obj) => {
  var counter = 0, strObj = JSON.stringify(obj).split('');
  strObj.forEach( i => {
    if(i == ':') counter++;
  });
  return counter;
};

const createSerializedObject = () => {
  return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {
  return arr.sort( (a, b) => a[__proto__] - b[__proto__] );
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
