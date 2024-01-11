/* 매칭 메커니즘 */
var countFruits = /\b(\d+) (apple|peach|orange)s?\b/;
var reuslt = countFruits.exec("there are 10 apples");
console.log(reuslt);
console.log(reuslt[0]);