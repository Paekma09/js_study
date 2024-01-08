/* 프로퍼티의 속성 */
// 프로퍼티의 디스크립터 가져오기
var tom = { name: "Tom" };
Object.getOwnPropertyDescriptor(tom, "name");   // -> { value: "Tom", writable: true, enumerable: true, configurable: true }
Object.getOwnPropertyDescriptor({}, "name");    // -> undefined
Object.getOwnPropertyDescriptor(tom, "toString");   // -> undefined

// 객체의 프로퍼티 설정하기
var obj = {};
Object.defineProperty(obj, "name", {
    value: "Tom",
    writable: true,
    enumerable: false,
    configurable: true
});
Object.getOwnPropertyDescriptor(obj, "name");   // -> { value: "Tom", writable: true, enumerable: false, configurable: true }

var person = { name: "Tom" };
Object.defineProperty(person, "name", {
    writable: false,
});
Object.getOwnPropertyDescriptor(person, "name");    // -> { value: "Tom", writable: false, enumerable: true, configurable: true }
person.name = "Huck";
console.log(person.name);   // -> Tom

var person1 = {
    name: "Tom",
    age: 17,
    sayHello: function () {
        console.log("Hello! " + this.name);
    }
};
Object.defineProperty(person, "sayHello", {
    enumerable: false
});
for (var p in person1) {
    console.log(p); // name, age ... 순서대로 표시됨
}

var person2 = {
    name: "Tom",
    age: 17,
    sex: "남"
};
Object.defineProperty(person2, "age", {configurable: false});
delete person2.age;
console.log(person2.age);   // -> 17
// Object.defineProperty(person2, "age", {enumerable: false}); // -> Uncaught TypeError: Cannot redefine property: age
Object.defineProperty(person2, "age", {writable: false});
// configurable속성 값은 true로 되돌릴 수 없습니다

// 객체의 프로퍼티 속성 여러 개를 한꺼번에 설정하기
var person3 = Object.defineProperties({}, {
    _name: {
        value: "Tom",
        writable: true,
        enumerable: true,
        configurable: true
    },
    name: {
        get: function () {
            return this._name;
        },
        set: function (value) {
            var str = value.charAt(0).toUpperCase() + value.substring(1);
            this._name = str;
        },
        enumerable: true,
        configurable: true
    }
});
Object.getOwnPropertyDescriptor(person3, "name");   // -> { enumerable: true, configurable: true }