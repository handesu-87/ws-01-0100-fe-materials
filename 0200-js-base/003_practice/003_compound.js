/**
 *  3.1 二段にネストした配列を一段にして返す関数を実装してください。
 *
 *   [[1, 2], [3, 4], [5, 6]] => [1, 2, 3, 4, 5, 6]
 *
 */

function flatten(list) {
  return list.flat(2);
}

/**
 *  3.2 id の配列を各要素がキーの値が true なオブジェクトに変換する関数を実装してください。
 *
 *  input
 *    [1, 3, 4, 5, 9]
 *
 *  output
 *  {
 *    1: true,
 *    3: true,
 *    4: true,
 *    5: true,
 *    9: true,
 *  }
 *
 */

function toMap(list) {
  const result = {};
  for (let i = 0; i < list.length; i++) {
    result[list[i]] = true;
  }
  return result;
}

/**
 *  3.3 オブジェクトが引数で与えられる場合に、それぞれの key と value を順番に配列として返す関数を実装してください。
 *
 *  example:
 *    { a: 1, b: 2 } => ['a', 1, 'b', 2]
 *    {} => []
 *
 */

function toList(obj) {
  const result = [];
  for (const key in obj) {
    result.push(key);
    result.push(obj[key]);
  }
  return result;
}

/**
 *  3.4 オブジェクトの配列のid だけを取り出して配列として返す関数を実装してください。
 *
 *  input:
 *    [
 *      { id: 1, category: 'kitchen', name: 'knife' },
 *      { id: 2, category: 'office', name: 'pen' },
 *      { id: 3, category: 'bath', name: 'soap' },
 *      { id: 4, category: 'kitchen', name: 'knife' },
 *      { id: 5, category: 'kitchen', name: 'knife' },
 *    ]
 *
 *  input:
 *    [1, 2, 3, 4, 5]
 *
 */

function ids(obj) {
  const result = [];
  for (const item of obj) {
    result.push(item.id);
  }
  return result;
}

/**
 *  3.5 二つの配列をマージする関数を実装してください。
 *      ただし、重複する値はまとめた配列になるように実装してください。
 *
 *  example:
 *    [1, 2], [3, 4] => [1, 2, 3, 4]
 *    [1, 2, 3], [3, 4, 5] => [1, 2, 3, 4, 5]
 *    [3, 2, 1], [3, 4, 5] => [3, 2, 1, 4, 5]
 *    [3, 1, 2], [1, 2, 3] => [3, 1, 2]
 *    [3, 1, 2], [1, 2, 5] => [3, 1, 2, 5]
 *
 */

function merge(a, b) {
  // ...new Set() で重複を排除しつつ、スプレッド構文で配列に戻す
  // return [...new Set([...a, ...b])];
  return Array.from(new Set(a.concat(b)));
}

/**
 *  3.6 二つの配列のどちらにも存在する要素を返す関数を実装してください。
 *      要素は全て数字とします。
 *
 *  example:
 *    [1, 2], [3, 4] => []
 *    [1, 2, 3], [3, 4, 5] => [3]
 *    [3, 1, 2], [1, 2, 3] => [3, 1, 2]
 *    [3, 1, 2], [1, 2, 5] => [1, 2]
 *
 */

function intersection(a, b) {
  const result = [];
  for (const item of a) {
    if (b.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

/**
 *  3.7 二つのオブジェクトの配列をマージする関数を実装してください。
 *      id が同じだったらオブジェクトをマージしてください。
 *
 *  input:
 *    [{ id: 1, a: 1 }, { id: 2, b: 1 }], [{ id: 1, c: 1 }, {id: 3, d: 4}]
 *      => [[id: 1, a: 1, c: 1], { id: 2, b: 1 }, {id: 3, d: 4}]
 *
 *    [{ id: 1, a: 1 }, { id: 2, b: 1 }], [{ id: 3, c: 1 }, {id: 4, d: 4}]
 *      => [{ id: 1, a: 1 }, { id: 2, b: 1 }, { id: 3, c: 1 }, { id: 4, d: 4 }]
 *
 */

function mergeObjOfArray(a, b) {
  const map = new Map();
  for (const obj of a.concat(b)) {
    if (map.has(obj.id)) {
      Object.assign(map.get(obj.id), obj);
    } else {
      map.set(obj.id, { ...obj });
    }
  }
  return Array.from(map.values());
}

/**
 *  3.8 渡されたデータの合計(count プロパティの和) を求める関数を実装してください。
 *
 *  example:
 *    [{ count: 1 , a: [{ count: 2 }, { count: 3 }], b: { count: 4 }}, { count: 5 }]
 *      => 15
 *
 *    [{ count: 1 }, { count: 2 }, { count: 3 }]
 *      => 6
 *
 */

function sum(data) {
  let result = 0;

  //1回目：dataが配列の場合
  if (Array.isArray(data)) {
    for (const v of data) result += sum(v);
    return result;
  }
  //2回目：dataがオブジェクトの場合
  if (data && typeof data === "object") {
    if (typeof data.count === "number") result += data.count;
    for (const key in data) result += sum(data[key]);
  }

  return result;
}

module.exports = {
  flatten,
  toMap,
  toList,
  ids,
  merge,
  intersection,
  mergeObjOfArray,
  sum
}
