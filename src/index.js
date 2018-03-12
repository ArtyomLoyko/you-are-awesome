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
  }

  return increase;
};
incrementor.counter = 1;

const asyncIncrementor = () => {

};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

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
