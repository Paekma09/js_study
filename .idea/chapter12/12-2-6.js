/* 위치를 기준으로 매칭하기 */

// 문자열의 시갖 위치 : ^
var jsFirst = /^JavaScript/;
console.log(jsFirst.test("JavaScript is powerful"));    // -> true
console.log(jsFirst.test("I love JavaScript")); // -> false

// 문자열의 마지막 위치 : $
var jsLast = /JavaScript$/;
console.log(jsLast.test("JavaScript is powerful"));    // -> fasle
console.log(jsLast.test("I love JavaScript")); // -> true

// 영어 단어의 경계 : \b
console.log(/\bcat\b/.test("저는 cat 을 좋아합니다.")); // -> true

// 전방 탐섹 : (?=pattern)
console.log(/Java(?=Script)/.exec("I like JavaScript"));    // -> ["Java"]
console.log(/Java(?=Script)/.exec("I like JavaCoffee"));    // -> null

// 전방 부정 탐색 : (?!pattern)
console.log(/Java(?!Script)/.exec("I like JavaScript"));    // -> null
console.log(/Java(?!Script)/.exec("I like JavaCoffee"));    // -> ["Java"]