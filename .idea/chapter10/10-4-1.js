/* 비구조화 할당 */

// 배열의 비구조화 할당
var [a, b] = [1, 2];    // var a = 1, b = 2와 같음
[a, b] = [2*a, 3*b];    // a = 2*a, b = 3*b와 같음
[a, b] = [b, a];    // a 값과 b 값을 교환함
[a, b, c] = [1, 2]; // a = 1, b = 2, c = undefined와 같음
[a, b] = [1, 2, 3]; // a = 1, b = 2와 같음, 3은 무시됨
[, a,, b] = [1, 2, 3, 4];    // a = 2, b = 4와 같음
var array, first, second;
array = [first, second] = [1, 2, 3, 4]; // first = 1, second = 2, array = [1, 2, 3, 4]와 같음
[a, b, ...rest] = [1, 2, 3, 4]; // a = 1, b = 2, rest = [3, 4]와 같음
[a=0, b=1, c=2] = [1, 2];   // a = 1, b = 2, c = 2와 같음
// 2차원 좌표값 (x, y)를 원점 기준으로 각도 theta만큼 회전하기
function rotation(x, y, theta) {
    var s = Math.sin(theta), c = Math.cos(theta);
    return [c*x - s*y, s*x + c*y];
}
var [a, b] = rotation(1, 2, Math.PI/3);
console.log([a, b]);

// 객체의 비구조화 할당
var {a: x, b: y} = {a: 1, b: 2};    // x = 1, y = 2와 같음
var {a1: x, b1: y} = {a1: y, b1: x}; // x 값과 y 값을 교환한다
var {a2: x, b2: y} = {a2: 1, c2: 2};    // x = 1, y = undefined와 같음
var {a3: x, b3: y} = {a3: 1, b3: 2, c3: 3}; // x = 1, y = 2, 3은 무시됨
var {sin: sin, cos: cos, tan: tan, PI: PI} = Math;  // var sin = Math.sin, cos = Math.cos, tan = Math.tan, PI = Math.PI와 같음
var {a4: x=1, b4: y=2, c4: z=3} = {a4: 2, b4: 4};   // x = 2, y = 4, z = 3와 같음
var {a5, b5} = {a5: 1, b5: 2};  // {a5: a5, b5: b5} = {a5: 1, b5: 2}와 같음
var {sin1, cos1, tan1, PI1} = Math; // var sin1 = Math.sin, cos1 = Math.cos, tan1 = Math.tan, PI1 = Math.PI와 같음
var {a6=1, b6=2, c6=3} = {a6: 2, b6: 4};    // a = 2, b = 4, c = 3과 같음

// 반복 가능한 객체의 비구조화 할당
var [a1, b1, c1] = "ABC";   // var a1 = "A", b1 = "B", c2 = "C"와 같음
function* createNumbers(from, to) {
    while ( from <= to ) yield from++;
}
var [a2, b2, c2, d2, e2] = createNumbers(10, 15);   // a2 = 10, b2 = 11, c2 = 12, d2 = 13, e2 = 14와 같음
console.log([a2, b2, c2, d2, e2]);

// 중첩된 자료 구조의 비구조화 할당
var [a3, [b3, c3]] = [1, [2, 3]];   // var a3 = 1, b3 = 2, c3 = 3과 같음
var {a7: x, b7: {c7: y, d7: z}} = {a7: 1, b7: {c7: 2, d7: 3}};  // var x = 1, y = 2, z = 3과 같음
var person = {name: "Tom", age: 17, hobby: ["Tennis", "Music"]};
var {name, age, hobby:[hobby1]} = person;   // var name = "Tom", age = 17, hobby1 = "Tennis"와 같음
console.log({name, age, hobby:[hobby1]});