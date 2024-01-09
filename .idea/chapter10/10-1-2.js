/* 수정 메서드 */

// push 메서드
var a = ["A", "B", "C"];
a.push("D");    // a의 내용 : ["A", "B", "C", "D"] : 반환값 = 4
a.push("E", "F");   // a -> ["A", "B", "C", "D", "E", "F"]

// pop 메서드
a.pop();    // a -> ["A", "B", "C", "D", "E"] : 반환값 = "F"

// shift 메서드
a.shift();  // a -> ["B", "C", "D", "E"] : 반환값 = "A"

// unshift 메서드
a.unshift("X"); // a -> ["X", "B", "C", "D", "E"] : 반환값 = 5
a.unshift("Y", "Z");    // a -> ["Y", "Z", "X", "B", "C", "D", "E"]

// splice 메서드
var b1 = ["A", "B", "C", "D"];
b1.splice(1, 2, "X", "Y", "Z");  // b1 -> ["A", "X", "Y", "Z", "D"] : 반환값 = ["B", "C"]

var b2 = ["A", "B", "C", "D"];
b2.splice(2);  // b2 -> ["A", "B"] : 반환값 = ["C", "D"]

var b3 = ["A", "B", "C", "D"];
b3.splice(-1);  // b3 -> ["A", "B", "C"] : 반환값 = ["D"]

var b4 = ["A", "B", "C", "D"];
b4.splice(1, 0, "X", "Y");  // b4 -> ["A", "X", "Y", "B", "C", "D"] : 반환값 = []

// sort 메서드
var c = [5, 2, 7, 1, 3, 9, 8];
a.sort(function (a, b) {
    return a - b;
}); // a -> [1, 2, 3, 5, 7, 8, 9]

