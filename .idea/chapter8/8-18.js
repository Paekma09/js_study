/* 함수를 합성하는 함수 (인수를 여러개 받을 수 있음) */
function compose(f, g) {
    return function () {
        return f.call(this, g.apply(this, arguments));
    };
}