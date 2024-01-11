/* 반복 패턴 */

// 바로 앞의 요소를 n번 반복 : {n}
var dateTime = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}/;
console.log(dateTime.test("it's 2016-08-27 10:15")); // -> true
console.log(dateTime.test("2016-Aug-27 10:15"));    // -> false

// 욕심 없는 반복 : 반복 문자 ?
console.log(/Java.*/.exec("I love JavaScript"));    // -> ["JavaScript"]
console.log(/Java.*?/.exec("I love JavaScript"));   // -> ["Java"]