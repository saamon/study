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

// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// //アロー関数 (=> 矢印がアローの由来)
// // const func2 = (str) => str;

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("fanc2です"));

// //２つの足し算(アロー関数で書く)

// const add = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(add(10, 20));

/**分割代入 */
// const myProfile = {
//   name: "Kento",
//   age: 20
// };

// // const message1 = `名前は${myprofile.name}です。年齢は${myProfile.age}です`;

// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message2);

// const myProfile = ['Kento',20];

// const message3 = `名前は${myProfile[0]}で年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name ,age] = myProfile;
// const message4 =`名前は${name}です。年齢は${age}です`
// console.log(message4);

/**デフォルト値,引数など */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`)
// // console.log(sayHello("Kento"));
// sayHello("");

/**スプレッド構文 */

//配列の展開

// const arr1 =[1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1 ,num2) => console.log(num1+num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 =[1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
// const arr4 =[10,20];
// const arr5 =[30,40];

// const arr6 =[...arr4];
// arr6[0] =100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4 , ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] =100;
// console.log(arr4);
