/**const,letの変数宣言 */

// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き、再宣言可能

// val1 = "val変数を上書き"
// console.log(val1);

// let val2 ="let変数";
// console.log(val2);

// //letは上書きが可能

// val2 = "letは上書きが可能"
// console.log(val2);

// //letは再宣言不可能

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// val3 = "const変数を上書き"；

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name:"aaa",
//   age: 12,
// };

// val4.name ="bbb";
// val4.address ="aomori"
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog' , 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**テンプレート文字列 */

// const name = "Kento";
// const age = 20;
// //私の名前はKentoです,年齢は20です

// //従来の方法
// const massage1 = "私の名前は"　+ name + "です。年齢は"　+ age + "です。"
// console.log(massage1);

// //テンプレート文字列を用いた方法(${})
// const massage2 =`私の名前は${name}です。年齢は${age}です。`;
// console.log(massage2);

/**アロー関数 */

//従来の方法

// function func1(str) {
//  return str;
// }

const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

//アロー関数 (=> 矢印がアローの由来)
// const func2 = (str) => str;

const func2 = (str) => {
  return str;
};

console.log(func2("fanc2です"));

//２つの足し算(アロー関数で書く)

const add = (num1, num2) => {
  return num1 + num2;
};

console.log(add(10, 20));
