/* 문자 클래스의 단축 표기 */

// 숫자와 숫자 외의 문자 : \d, \D
var dateTime = /\d\d\d\d-\d\d-\d\d \d\d:\d\d/;
console.log(dateTime.test("it's 2016-08-27 10:15"));    // -> true
console.log(dateTime.test("2016-Aug-27 10:15"));    // -> false

// 단어 문자와 단어 문자 외의 문자 : \w, \W
console.log(/\w/.test("A"));    // -> treu
console.log(/\w/.test("!@#&%-"));   // -> false

// 공백 문자와 공백 문자 외의 문자 : \s, \S
console.log(/\s\w\w/.exec("JavaScript RegExp"));    // -> [" Re"] : " Re"와 일치함
console.log(/\s\w\w/.exec("JavaScriptRegExp")); // -> null