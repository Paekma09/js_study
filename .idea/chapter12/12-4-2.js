/* RegExp의 메서드 */

// exec 메서드의 반환값
var tel = /(\d{2,5})-(\d{1,4})-(\d{4})/;
var text = "Tom: 010-1234-5678";
var result = tel.exec(text);
console.log(result);    // -> ["010-1234-5678", "010", "1234", "5678"]
console.log(result.index);  // -> 5
console.log(result.input);  // -> "Tom: 010-1234-5678"

// lastIndex 프로퍼티
var tel1 = /(\d{2,5})-(\d{1,4})-(\d{4})/g;
var text1 = "Tom: 010-1234-5678\nHuck: 020-550-7809\nBecky: 030-4321-9876";
console.log(tel1.lastIndex);    // -> 0
console.log(tel1.exec(text1));  // -> ["010-1234-5678", "010", "1234", "5678"]
console.log(tel1.lastIndex);    // -> 18
console.log(tel1.exec(text1));  // -> ["020-550-7809", "020", "550", "7809"]
tel1.lastIndex = 0; // lastIndex 초기화
while ( (result1 = tel1.exec(text1)) != null ) {
    console.log(result1[0], result1[1], result1[2], result1[3]);
}
// -> 010-1234-5678 010 1234 5678
//    020-550-7809 020 550 -7809
//    030-4321-9876 030 4321 9876