/* 함수를 합성하는 함수 (인수를 여러개 받을 수 있음) */
function compose(f, g) {
    return function () {
        return f.call(this, g.apply(this, arguments));
    };
}
var square = function (x) {
    return x * x;
};
var add1 = function (x) {
    return x + 1;
}
var h = compose(square, add1);  // h(x) = (x+1) * (x+1)
console.log(h(2));  // -> 9