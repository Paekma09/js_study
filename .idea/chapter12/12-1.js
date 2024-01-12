/* 써로게이트 페어가 포함된 문자열을 배열로 만들기(ES6 버전) */
function stringToArray(s) {
    return s.match(/[\s\S]/ug) || [];
}
var result = stringToArray("📖 모던 자바스크립트 입문");
console.log(result);    // -> ["📖", " ", "모", "던", " ", "자", "바", "스", "크", "립", "트"," ", "입", "문"]