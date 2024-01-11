/* 플래그 */

// 플래그를 설정하는 방법
var reg = new RegExp("abc", "g");
var reg1 = /abc/g;
var reg2 = /abc/gi;

// i 플래그
console.log(/\bcat\b/i.test("I like Cat")); // -> true
console.log(/\bcat\b/i.test("I like CAT")); // -> true

// m 플래그
var reg3 = /^cat/im;
console.log(reg3.test("Dog\nCat\nMonkey")); // -> true
var reg4 = /at$/im;
console.log(reg4.test("Dog\nCat\nMonkey")); // -> true