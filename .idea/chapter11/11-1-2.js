/* Strict 모드 사용 */

// Strict 모드 설정
function f(x) {
    "use strict";
    y = x;
}
console.log(f(2));  // -> Uncaught ReferenceError: y is not defined(...)