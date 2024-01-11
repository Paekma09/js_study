/* RegExp 객체의 메서드 */
var reg = /cat/;
console.log(reg.test("cats and dogs")); // -> true
console.log(reg.test("Cat"));   // -> false

var reg1 = /Script/;
var result = reg1.exec("JavaScript");
console.log(result[0]); // -> "Script"
console.log(result.index);  // -> 4
console.log(result.input);  // -> "JavaScript"