

/**
 *  文字列のローテート
 *
 *  文字列を入力された数だけローテートさせる関数を実装してください
 *
 *  example:
 *    'library',  1 => 'ylibrar'
 *    'library',  3 => 'arylibr'
 *    'library', -1 => 'ibraryl'
 *
 */
function rotate(str, num) {
  const len = str.length;
  const n = ((num % len) + len) % len; // 正のインデックスに変換
  // slice()...負の値を指定すると文字列の末尾から切り取られる
  return str.slice(-n) + str.slice(0, len - n);
}

/**
 *  母音を除いた文字列
 *
 *  与えられた文字列から母音を除いた関数を実装してください
 *
 *  example:
 *    'library' => 'lbrry'
 *    'apple' => 'ppl'
 *    'banana' => 'bnn'
 *
 */
// 正規表現を使う！
function removeVowels(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

/**
 *  文字列のカウント
 *
 *  ある文字列の中に特定の文字列がいくつ含まれるかカウントする関数を実装してください。
 *
 *  example:
 *    'abcdabeabc',  'abc' => 2
 *    'abc',  'abc' => 1
 *    'hogehoage',  'hoge' => 1
 *
 */
/// ⭐️⭐️⭐️
function countStr(s1, s2) {
  let count = 0;
  const regex = new RegExp(s2, 'g');
  //空文字の場合0を返す
  if (s2 === '') {
    return 0;
  }
  //exec...文字列から正規表現にマッチする部分を検索するメソッド
  // result はこんな感じのもの👇
  // result[0] → マッチした文字列（例: "ab"）
  // result.index → 何文字目で見つかったか（例: 2）
  // result.input → 元の文字列（例: "zzabyyab"）
  let match;
  while ((match = regex.exec(s1)) !== null) {
    count++;
  }
  return count;
}

/**
 *  引数に与えられたアルファベットの文字列が回文であること
 *  を確認するメソッドを実装してください
 *
 *  example:
 *      work => false
 *      anna => true
 *      madam => true
 *      level => true
 *
 */

// join()...配列の要素を順番にくっつけて 1つの文字列にする
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}

/**
 *  素数
 *
 *  入力された数字が素数であるか確認する関数を実装してください
 *
 *  example:
 *    1 => False
 *    2 => True
 *    3 => True
 *    6 => False
 *    9 => False
 *    11 => True
 *
 */
//平方根を使う方法もあるが、難しい！
function isPrime(num) {
  if (num < 2) return false; // 0,1は素数じゃない

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) {
      return false; // 割り切れたら素数じゃない
    }
  }
  return true; // 最後まで割り切れなかったら素数
}

/**
 *  配列の4と次の数字を抜いた合計
 *
 *  与えらた配列の合計を返す関数を実装してください。
 *  ただし、配列の中に4がある場合は、4とその次の数字を合計に含めないでください。
 *
 *  example:
 *    [1, 2, 3, 4] => 6
 *    [1, 2, 3, 4, 5] => 6
 *    [1, 4, 3, 4, 5] => 1
 *    [4, 3, 3, 5] => 8
 *    [4, 3, 3, 4] => 3
 *    [4] => 0
 *
 */
function sumWithout4andNext(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 4) {
      i++; // 次の数字をスキップ
    } else {
      total += array[i];
    }
  }
  return total;
}

module.exports = {
  rotate,
  removeVowels,
  countStr,
  isPalindrome,
  isPrime,
  sumWithout4andNext
}
