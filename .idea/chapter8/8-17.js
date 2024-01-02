/* 함수를 합성하는 함수 */
function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}