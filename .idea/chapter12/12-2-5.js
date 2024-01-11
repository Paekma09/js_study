/* 그룹화와 참조 */

// 그룹화 : (...)
var bark = /bow+(woo+f)+/;
console.log(bark.test("bowwoofwoofwooofwoooof"));   // -> true

var header = /<h[1-6]>.*<\/h[1-6]>/;
console.log(header.test("<h1>JavaScript</h1>"));    // -> true
console.log(header.test("<h1>JavaScript</h2>"));    // -> true

var header1 = /<(h[1-6])>.*<\/\1>/;
console.log(header1.test("<h1>JavaScript</h1>"));    // -> true
console.log(header1.test("<h1>JavaScript</h2>"));    // -> false
console.log(header1.exec("<h1>JavaScript</h1>"));   // -> ["<h1>JavaScript</h1>", "h1"]

// 캡처링 없는 그룹화 : (?:...)
var postalCode = /㉾(?:\d{3})-(?:\d{3})/;
console.log(postalCode.test("㉾463-803"));   // -> true