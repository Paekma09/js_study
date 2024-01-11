/* 문자 클래스 */

// 문자 클래스 : [...]
console.log(/[0123456789]/.test("10 little indians"));  // -> true
var surrogatePair = /[\uD800-\uDBFF][\uDC001-\uDFFF]/;
console.log(surrogatePair.test("📖"));   // -> true
console.log(surrogatePair.test("길벗"));  // -> false

// 부정 믄자 클래스 : [^...]
console.log(/[^0-9]/.test("137"));  // -> false
