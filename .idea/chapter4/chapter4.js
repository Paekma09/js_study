var p = { x: 1.0, y: 2.5 };
var circle = {
    center: { x:1.0, y:2.0 },
    radius: 2.5
};

circle.center.x;

var person = {
    name: "남기준",
    age: 43,
    sex: "남",
    maarried: false
};

function square(x) {
    return x * x;
}

square(3);

function dist(p, q) {
    var dx = q.x - p.x;
    var dy = q.y - p.y;
    return Math.sqrt(dx*dx+dy*dy);
}

var p1 = {x:1, y:1};
var p2 = {x:4, y:5};
var d = dist(p1, p2);

var bark = function () {
    console.log("Bow-wow");
}
bark();
console.log(bark());    //-> undefined

var sq = square;
console.log(sq(5));

function add1(x) {
    return x = x + 1;
}
var a = 3;
var b = add1(a);
console.log("a = " + a + ", b = " + b);

function add2(p) {
    p.x = p.x + 1;
    p.y = p.y + 1;
    return p;
}
var a = {x:3, y:4};
var b = add2(a);
console.log(a, b);

var a = "global";
function f() {
    var b = "local";
    console.log(a);
    return b;
}
f();
console.log(b); //ReferenceError : b is not defined

let x = "outer x";
{
    let x = "inner x";
    let y = "inner y";
    console.log(x);
    console.log(y);
}
console.log(x);
console.log(y); //ReferenceError : Y is not defined

const origin = {x:1, y:2};
origin.x = 3;
console.log(origin);

var circle1 = {
    center: { x:1.0, y:2.0 },
    radius: 2.5,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};
circle1.area();
circle1.translate = function (a, b) {
    this.center.x = this.center.x + a;
    this.center.y = this.center.y + b;
};
circle1.translate(1, 2);
circle1.center;

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}
var card = new Card("하트", "A");
console.log(card);
var card1 = new Card("하트", "A");
var card2 = new Card("클럽", "K");
var card3 = new Card("스페이드", "2");

function Particle(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.velocity = Math.sqrt(vx * vx + vy * vy);
}
var p = new Particle(0, 0, 3, 4);
console.log(p);

function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    };
}
var p = {x:0, y:0};
var c = new Circle(p, 2.0);
console.log("넓이 = " + c.area());

var now = new Date();
console.log(now);
var then = new Date(2008, 5, 10);
console.log(then);
var elapsed = now - then;
console.log(elapsed);

var start = new Date();
/* 실행 시간을 측정 할 코드를 작성하는 위치 */
var end = new Date();
var elapsed = ebd - start;

now.getFullYear()
now.getMonth()
now.getDate()
now.getDay()
now.getHours()
now.getMinutes()
now.getSeconds()
now.getMilliseconds()
now.toString()
now.toLocaleString()
now.toLocaleDateString()
now.toLocaleTimeString()
now.getUTCHours()
now.toUTCString()

var square1 = new Function("x", "return x * x");

console.dir(window);

var array = ["A", "B", "C", "D"];
array.length = 2;
console.log(a); // -> ["A", "B"]

var evens = new Array(2, 4, 6, 8);
var empty = new Array();
var a1 = new Array(2, 4);
var various = new Array(3.14, "pi", true, {x:1, y:2}, [2, 4, 6, 8]);
var x = new Array(3);
console.log(x.length);  // -> 3
evens[2] // -> 6 (인덱스가 2인 요소 즉, 세 번째 요소)

var a2 = ["A", "B", "C", "D"];
console.log(a2["2"]);   // -> C
a2[4] // -> undefined

var a3 = ["A", "B", "C"];
a[3] = "D";
console.log(a); // -> ["A", "B", "C", "D"];
a.push("E");
console.log(a); // -> ["A", "B", "C", "D", "E"];
delete a[1];
console.log(a); // -> ["A", undefined, "C", "D", "E"];