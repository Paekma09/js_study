/* 프로토타입 상속 */
// 프로토타입 체인
var objA = {
    name: "Tom",
    sayHello: function () {
        console.log("Hello! " + this.name);
    }
};
var objB = {
    name: "Huck"
};
objB.__proto__ = objA;
var objC = {};
objC.__proto__ = objB;
objC.sayHello();    // -> "Hello! Huck"
//객체는 자신이 갖고 있지 않은 특성을 프로토타입에 위임한다