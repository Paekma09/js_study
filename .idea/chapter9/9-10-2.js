/* 객체 리터럴에 추가된 기능 */

// 계산된 프로퍼티 이름(Computed Property names) : { [계산식]: value }
var prop1 = "name", i = 1;
var obj1 = { [prop1 + i]: "Tom" };
console.log(obj1);   // -> Object { name1: "Tom" }
var obj2 = { [Symbol("heart")]: "A" };
console.log(obj2);  // -> Object { Symbol(heart): "A" }

// 프로퍼티 정의의 약식 표기 : { prop }
var prop2 = 2;
var obj3 = { prop2 };
console.log(obj3);  // -> Object { prop2: 2 }

// 메서드 정의의 약식 표기 : { method() {} }
var person1 = {
    name: "Tom",
    sayHello() { console.log("Hello! " + this.name); }
};
person1.sayHello(); // -> "Hello! Tom"

var person2 = {
    name: "Tom",
    sayHello: function () { console.log("Hello! " + this.name); }
};

// 제너레이터 정의의 약식 표기 : { *generator () {} }
var obj4 = {
    *range(n) { for (var i=0; i<n; i++) yield i; }
};
var it = obj4.range(10);
console.log(it.next().value);   // -> 0
console.log(it.next().value);   // -> 1
console.log(it.next().value);   // -> 2