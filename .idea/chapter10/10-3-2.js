/* Array.prototype의 메서드를 유사 배열 객체에서 사용하기 */

var a = {0: "A", 1: "B", 2: "C", length: 3};
var b = Array.prototype.join.call(a, ",");  // -> "A,B,C"
var c = Array.prototype.push.call(a, "D");  // -> Object {0: "A", 1: "B", 2: "C", 3: "D", length: 4}
var d = Array.prototype.slice.call(a, 0);   // -> ["A", "B", "C", "D"] : 진짜 배열로 변환

var a1 = {0: 1, 1: 2, 2: 3, length: 3};
var b1 = Array.prototype.map.call(a1, function (v) { return v * v }); // -> [1, 4, 9]

var a2 = {0: "A", 1: "B", 2: "C", length: 3};
var b2 = Array.prototype.concat.call(a2, ["D", "E"]); // -> [{0: "A", 1: "B", 2: "C", length: 3}, "D", "E"]

console.log(b);
console.log(c);
console.log(d);
console.log(b1);
console.log(b2);