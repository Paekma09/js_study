/* 정적 메서드 작성하기 */
class Person {
    //생성자를 사용한 초기화
    constructor(name) {
        this.name = name;
        Person.personCount++;
    }
    //prototype 메서드
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    sayName() {
        console.log(this.name);
    }
    //정적 메서드
    static count() {
        return Person.personCount;
    }
}
Person.personCount = 0;

var person1 = new Person("Tom");
console.log(Person.count());    // -> 1
var person2 = new Person("Huck");
console.log(Person.count());    // -> 2