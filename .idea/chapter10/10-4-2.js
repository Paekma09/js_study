/* 전개 연산자 */
[..."ABC"]  // -> ["A", "B", "C"]
f(..."ABC") // -> f("A", "B", "C")와 같음
var a = [1, ...[2, 3, 4], 5];   // -> [1, 2, 3, 4, 5]
f1(...[1, 2, 3])    // f1(1, 2, 3)과 같음

function* createNumbers(from, to) {
    while ( from <= to ) yield from++;
}
var iter = createNumbers(10, 15);
[...iter]   // -> [10, 11, 12, 13, 14, 15]

var a2 = ["A", "B", "C"];
a2.push(...["D", "E"]); // -> ["A", "B", "C", "D", "E"]

var a3 = [5, 2, 3, 7, 1];
Math.max(...a3);    // -> 7