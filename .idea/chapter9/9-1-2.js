/* 프로토타입 */

//1. 생성자 안에서 메서드를 정의하는 방식의 문제점
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.Pi * this.radius * this.radius;
    };
}
var c1 = new Circle({x:0, y:0}, 2.0);
var c2 = new Circle({x:0, y:1}, 3.0);
var c3 = new Circle({x:1, y:0}, 1.0);
// 각각의 인스턴스가 똑같은 메서드area를 소유한다

//2. 프로토타입 객체
// Circle1 생성자
function Circle1(center, radius) {
    this.center = center;
    this.radius = radius;
}
// Circle1 생성자의 prototype 프로퍼티에 area 메서드를 추가
Circle1.prototype.area = function () {
    return Math.PI * this.radius * this.radius;
}
// Circle1 생성자로 인스턴스를 생성
var c11 = new Circle1({x:0, y:0}, 2.0);
var c22 = new Circle1({x:0, y:1}, 3.0);
var c33 = new Circle1({x:1, y:0}, 1.0);
console.log("넓이 = " + c11.area());  // -> 넓이 = 12.566370614359172
// 모든 인스턴스는 area메서드를 소유하지 않지만 프로토타입 객체의 area 메서드를 사용할 수 있다