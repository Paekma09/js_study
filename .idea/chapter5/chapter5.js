function polarToDescartes(r, theta) {
    var angle = Math.PI * theta / 180;
    return {
        x: r * Math.cos(angle),
        y: r * Math.sin(angle)
    };
}

var msgObj = new String("Everything is practice.");
msgObj.length   // -> 23
msgObj.charAt(3)    // -> "r"
console.log(msgObj.length);
console.log(msgObj.charAt(3));

var msg = new String("Everything is practice.").valueOf();
console.log(msg);
msg.substring(7, 10)
msg.slice(7, 10)
msg.slice(-3)
msg.slice(-9, -6)
msg.indexOf("t")
msg.indexOf("i", 10)
msg.lastIndexOf("t")
msg.split(" ")
msg.replace("p", "P")
msg.toUpperCase()
msg.endsWith(".")
msg.includes("thing")
msg.charCodeAt(0)
msg.codePointAt(0)

String.fromCharCode(0xAE38) // -> "길"
String.fromCharCode(65, 66, 67) // -> "ABC"

var a = [1, 2, 3];
var b = [1, 2, 3];
var c = 0;
console.log( a == b );  // -> false
console.log( a == c );  // -> true

null == undefined   // -> true
1 == "1" // -> true
"0xff" == 255   // -> true
true == 1  // -> true
true == "1"; // -> true
(new String("a")) == "a";    // -> true
(new Number(2)) == 2    // -> true
[2] == 2    // -> true

NaN === NaN     // -> false
null === undefined   // -> false
1 === "1" // -> false
"0xff" === 255   // -> false
true === 1  // -> false
true === "1"; // -> false
(new String("a")) === "a";    // -> false
(new Number(2)) === 2    // -> false
[2] === 2    // -> false

var p = null;
p && p.name     // -> null : p가 false로 평가되므로 p를 반환함. 우변은 평가하지 않음
p = { name: "Tom", age: 18 };
p && p.name     // -> "Tom" : p가 true로 평가되므로 p.name을 반환함

var time = time_interval || animationSettings.time || 33;

var s = "ABC";
console.log(typeof s);  // -> string

var parity = (a % 2 == 0)? "짝수" : "홀수";
if (a % 2 == 0) {
    parity = "짝수";
} else {
    parity = "홀수";
}

var n = 26;
n.toString()    // -> "26": 인수를 지정하지 않으면 10진수 문자열로 변환
n.toString(2)   // -> "11010": 2진수 문자열로 변환
n.toString(16)  // -> "1a": 16진수 문자열로 변환
(26).toString(16)   // -> "la": 숫자에서 바로 메서드를 사용하고자 할 때는 소괄호로 묶는다.

var x = 1234.567;
x.toString()    // -> "1234.567"
x.toString(16)  // -> "4d2.9126e978d5"
x.toFixed(0)    // -> "1235"
x.toFixed(2)    // -> "1234.57"
x.toFixed(4)    // -> "1234.5670"
x.toExponential(3)  // -> "1.235e+3"
x.toPrecision(3)    // -> "1.23e+3"
x.toPrecision(6)    // -> "1234.57"

String(26)  // -> "26"
String(1234.567)    // -> "1234.567"
String(0x1a)    // -> "26"
String("ABC")   // -> "ABC"
String(true)    // -> "true"
String(false)   // -> "false"
String(NaN) // -> "NaN"
String(null)    // -> "null"
String(undefined)   // -> "undefined"
String({x:1, y:2})  // -> "[object Object]"
String([1, 2, 3])   // -> "1, 2, 3"

parseInt("3.14")    // -> 3
parseFloat("3.14")  // -> 3.14
parseInt("3.14 meters") // -> 3 : 숫자 다음에 등장하는 문자열은 무시
parseFloat("3.14 meters")   // -> 3.14 : 숫자 다음에 등장하는 문자열은 무시
parseInt("0xFF")    // -> 255 : 문자열 앞 부분에 "0x"가 있으므로 16진수로 해석
parseInt("0.5") // -> 0
parseInt(".5")  // -> NaN : 문자열 앞 부분에 "."이 있으므로 해석하지 않음
parseInt("abc") // -> NaN : 숫자로 해석할 수 없음
parseFloat("\100")  // -> NaN : 문자열 앞 부분에 "\"가 있으므로 해석하지 않음

parseInt("101", 2)  // -> 5 : 문자열을 2진수로 해석해서 변환
parseInt("ff", 16)  // -> 255 : 문자열을 16진수로 해석해서 변환

Number("2.71828")   // -> 2.71828
Number(123) // -> 123
Number(true)    // -> 1
Number(false)   // -> 0
Number(NaN) // -> Nam
Number(undefined)   // -> NaN
Number(null)    // -> 0
Number({x:1, y:2})  // -> NaN
Number([1, 2, 3])   // -> NaM

!!x
Boolean(x)