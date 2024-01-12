/* 문자열 검색하기 : search 메서드 */
var s = "1 little,2 little indian";
console.log(s.search(/little/));    // -> 2 : 일치한 최초 문자열의 첫 번째 문자 위치
console.log(s.search(/\d/));    // -> 0 : 일치한 최초 문자열의 첫 번째 문자 위치
console.log(s.search(/\bindian/));  // -> 18 : 일치한 i의 위치
console.log(s.search(/3\s/));   // -> -1 : 일치하지 않음