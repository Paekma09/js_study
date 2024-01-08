/* for/in 문 */
var person1 = { name: "Tom", age: 17 };
var person2 = Object.create(person1);
person2.name = "Huck";
for (var p in person2) {
    console.log(p); // -> name, age ... 순서대로 표시됨
}

var a = [0, 2, 4, 6, 8];
a.name = "events";
for (var i in a) {
    console.log(i); // -> 0, 1, 2, 3, 4, name의 순서대로 표시됨
}