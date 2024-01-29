/* name 접근자 프로퍼티를 가진 객체를 생성하는 생성자를 정의 */
function Person(name) {
    Object.defineProperty(this, "name", {
        get: function () {
            return name;
        },
        set: function (newName) {
            name = newName;
        },
        enumerable: true,
        configurable: true
    });
}

Person.prototype.sayName = function () {
    console.log(this.name);
};

var person = new Person("Tom");
console.log(person.name);    // -> Tom
person.name = "Huck";
console.log(person.name);    // -> Huck
person.sayName();    // -> Huck