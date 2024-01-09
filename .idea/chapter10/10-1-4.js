/* 반복 메서드 */

// forEach 메서드
var a = [1, 2, 3, 4, 5];
// 배열의 합을 구한다
var sum = 0;
a.forEach(function (value) {
    sum += value;
});
console.log(sum);   // -> 15
// 각 배열 요소의 제곱을 구한다
a.forEach(function (v, i, a) {
    a[i] = v * v;
});
console.log(a); // -> [1, 4, 9, 16, 25]

// map 메서드
var a1 = [1, 2, 3, 4, 5]
var b1 = a1.map(function (x) {
    return 2 * x;
});
console.log(b1);    // -> [2, 4, 6, 8, 10]

var a2 = [1, 4, 9, 16, 25];
var b2 = a2.map(Math.sqrt);
console.log(b2);    // -> [1, 2, 3, 4, 5]

var persons = [
    {name: "Tom", age: 17},
    {name: "Huck", age: 18},
    {name: "Becky", age: 16}
];
var names = persons.map(person => person.name);
var ages = persons.map(person => person.age);
console.log(names); // -> ["Tom", "Huck", "Becky"]
console.log(ages);  // -> [17, 18, 16]
var charCount = persons.map(person => person.name).map(name => name.length);
console.log(charCount); // -> [3, 4, 5]

// reduce 메서드
var a3 = [1, 2, 3, 4, 5];
var b3 = a3.reduce(function (prev, value) { return prev + value; }, 0);
var c3 = a3.reduce(function (prev, value) { return prev + value; });
console.log(b3);    // -> 15
console.log(c3);    // -> 15

var a4 = [1, 2, 3, 4, 5];
var b4 = a4.reduce(function (p, v) {return p * v;}, 1);
var c4 = a4.reduce(function (p, v) {return (p > v)? p : v;});
console.log(b4);    //- > 120 : 배열 요소의 곱
console.log(c4);    // -> 5 : 최대값

var a5 = ["Tom", "Huck", "Becky"];
var b5 = a5.reduce(function (p, v) { p[v] = v.length; return p; }, {});
console.log(b5);    // -> {Tom: 3, Huck: 4, Becky: 5}