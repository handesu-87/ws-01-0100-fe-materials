
/**
 *  7.1 JSのfilter メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして filter メソッドは、使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function filter(array, cb) {
  // const result = [];

  // for (let i = 0; i < array.length; i++) {
  //   const value = array[i];
  //   if (cb(value, i)) {
  //     result.push(value);
  //   }
  // }
  // return result;
  const result = [];
  array.forEach((value, index) => {
    if (cb(value, index)) {
      result.push(value);
    }
  });
  return result;
}

/**
 *  7.2 JSの find メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして find メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function find(array, cb) {
  // for (let i = 0; i < array.length; i++) {
  //   const value = array[i];
  //   if (cb(value, i)) {
  //     return value;
  //   }
  // }
  // return undefined;
  let foundValue = undefined;
  array.forEach((value, index) => {
    if (foundValue === undefined && cb(value, index)) {
      foundValue = value;
    }
  });
  return foundValue;
}

/**
 *  7.3 JSの findIndex メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして findIndex メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function findIndex(array, cb) {
  // for (let i = 0; i < array.length; i++) {
  //   const value = array[i];
  //   if (cb(value, i)) {
  //     return i;
  //   }
  // }
  // return -1;
  let foundIndex = -1;
  array.forEach((value, index) => {
    if (foundIndex === -1 && cb(value, index)) {
      foundIndex = index;
    }
  });
  return foundIndex;
}

/**
 *  7.4 JSの some メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして some メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function some(array, cb) {
  // for (let i = 0; i < array.length; i++) {
  //   const value = array[i];
  //   if (cb(value, i)) {
  //     return true;
  //   }
  // }
  // return false;
  let found = false;
  array.forEach((value, index) => {
    if (!found && cb(value, index)) {
      found = true;
    }
  });
  return found;
}

/**
 *  7.5 JSの every メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして every メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 */

function every(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!cb(value, i)) {
      return false;
    }
  }
  return true;
}

/**
 *  7.6 JSの map メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして every メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 *
 */

function map(array, cb) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    const mappedValue = cb(value, i);
    result.push(mappedValue);
  }
  return result;
}

/**
 *  7.7 JSの forEach メソッドを自分で実装してみましょう。
 *      第一引数に配列、第二引数にコールバックが渡されるとして forEach メソッドは使わずに実装してください、
 *      また、コールバック関数の第一引数には、各要素とそのインデックスが渡されるように実装してください。
 *
 */

function forEach(array, cb) {
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    cb(value, i);
  }
}

module.exports = {
  filter,
  find,
  findIndex,
  some,
  every,
  map,
  forEach
}
