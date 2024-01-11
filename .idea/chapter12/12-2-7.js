/* 선택 패턴 */
var animal = /apple|peach|orange/;
console.log(animal.test("2 apples"));   // -> true
console.log(animal.test("pea"));    // -> fasle

var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var result = countFruits.exec("10 apples");
console.log(result);    // -> ["10 apples", "10", "apple"]
console.log(result[1]); // -> 10