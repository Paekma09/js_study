/* 문자열 나누기 : split 메서드 */

// split 메서드의 기본적인 사용법
console.log("172.20.51.65".split(".")); // -> ["172", "20", "51", "65"]

var names = " Tom Sawyer ; Huckleberry Finn ;Becky Thatcher ";
var list = names.replace(/(^\s*|\s*$)/g,"").split(/\s*;\s*/);
console.log(list);  // -> ["Tom Sawyer", "Huckleberry Finn", "Becky Thatcher"]

console.log("1 little,2 little indian".split(/\s*(\d)\s*/));    // -> ["", "1", "little,", "2", "little indian"]

// 반환할 문자열의 개수 제한하기
console.log("1, 2, 3, 4, 5".split(/\s*,\s*/, 3));   // -> ["1", "2", "3"]