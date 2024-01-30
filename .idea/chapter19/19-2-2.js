/* Blob 생성자 */

//빈 Blob 객체를 생성한다
var blob = new Blob();
console.log(blob.size, blob.type);  // -> 0 ""

//문자열을 가리키는 Blob 객체를 생성한다
var blob1 = new Blob(["JavaScript"], {type: "text/plain"});
console.log(blob1.size, blob1.type);    // -> 10 "text/plain"

//형식화 배열을 가리키는 Blob 객체를 생성한다
var a = new Uint8Array([0, 1, 2, 3]);
var blob2 = new Blob(a, {type: "application/octet-stream"});
console.log(blob2.size, blob2.type);    // -> 4 "application/octet-stream'