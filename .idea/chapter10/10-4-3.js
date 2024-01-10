/* ArrayBuffer와 형식화 배열 */

// ArrayBuffer 생성자
var buffer = new ArrayBuffer(1024);
console.log(buffer.byteLength); // -> 1024
var copy = buffer.slice(3, 6);

// 형식화 배열의 생성
var a = new Int8Array(10);
console.log(a.length);  // -> 10
console.log(a.BYTES_PER_ELEMENT);   // -> 1
console.log(a[0]);  // -> 0
console.log(a); // -> [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
var buffer1 = new ArrayBuffer(100);
var a1 = new Int16Array(buffer1);
console.log(a1.length); // -> 50
var a2 = new Int16Array(10);
for (var i=0; i<10; i++) a[i] = i;
var b2 = new Int16Array(a2);    // a2를 인수로 전달하면 b2에 a2의 복사본이 할당된다
console.log(b2);    // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log( a2 === b2 );   // -> false : a2와 b2는 별개의 배열
var a3 = [1, 2, 3, 4, 5];
var b3 = new Float64Array(a3);
console.log(b3);    // -> [1, 2, 3, 4, 5]
var a4 = new Uint8Array([0, 1, -1]);
for (var v of a4) console.log(v);   // 0, 1, 255를 순서대로 표시

// 형식화 배열은 ArrayBuffer 객체의 뷰
var a5 = new Int8Array(10);
var buffer5 = a5.buffer;
console.log(buffer5.byteLength);    // -> 10
var buffer6 = new ArrayBuffer(16);
var a_uint8 = new Uint8Array(buffer6);
var a_uint16 = new Uint16Array(buffer6);
var a_uint32 = new Uint32Array(buffer6);
var a_float64 = new Float64Array(buffer6);
a_uint8[0] = 170;   // 10101010(2)
a_uint8[1] = 204;   // 11001100(2)
console.log(a_uint16[0]);   // -> 52394 : = 1100110010101010(2)

// 오프셋을 지정해서 형식화 배열 생성하기
var buffer7 = new ArrayBuffer(16);
var a7 = new Int8Array(buffer7, 2, 5);
console.log(a7.byteOffset); // -> 2
var buffer8 = new ArrayBuffer(24);
var person = {
    id: new Uint32Array(buffer8, 0, 1),
    name: new Uint8Array(buffer8, 4, 16),
    weight: new Float32Array(buffer8, 20, 1)
};
