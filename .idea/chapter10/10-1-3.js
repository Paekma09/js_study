/* 접근자 메서드 */

// join 메서드
var a = ["A", "B", "C"];
a.join("-");    // -> "A-B-C"
a.join();   // -> "ABC"

// concat 메서드
a.concat(["D", "E"]);   // -> ["A", "B", "C", "D", "E"]
a.concat(["D", "E"], ["F", "G"]);   // -> ["A", "B", "C", "D", "E", "F", "G"]
a.concat(1, "X", true); // -> ["A", "B", "C", 1, "x", true]
a.concat("D", ["E", ["F", "G"]]);   // -> ["A", "B", "C", "D", "E", ["F", "G"]]

// slice 메서드
var b = ["A", "B", "C", "D", "E"];
b.slice(1, 3);  // -> ["B", "C"]
b.slice(3); // -> ["D", "E"]
b.slice(1, -1); // -> ["B", "C", "D"]
b.slice(-3, -2);    // -> ["C"]

// indexOf와 lastIndexOf 메서드
var c = ["A", "B", "C", "C", "D"];
c.indexOf("C"); // -> 2
c.lastIndexOf("C"); // -> 3
c.indexOf("C", 3);  // -> 3

// toString과 toLocaleString 메서드
["A", "B", "C", date].toString();   // -> "A, B, C"
[1, 2, 3, date].toString(); // -> "1, 2, 3"
[1, [2, 3], date].toString();   // -> "1, 2, 3"

var date = new Date();
console.log(["A", "B", "C", date].toString());  // -> "A, B, C, Date"
console.log(["A", "B", "C", date].toLocaleString());    // -> "A, B, C, Date"