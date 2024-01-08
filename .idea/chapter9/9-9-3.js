/* JSON의 변환과 환원 */

// 자바스크립트 객체를 JSON 문자열로 변환하기 : JSON.stringify
JSON.stringify({}); // -> '{}'
JSON.stringify(3.14);   // -> '3.14'
JSON.stringify("abc");  // -> '"abc"'
JSON.stringify(true);   // -> 'true'
JSON.stringify([2, 4, null]);   // -> '[2, 4, null]'
JSON.stringify({x:1, y:2}); // -> '{"x":1, "y":2}'

JSON.stringify({x:1, y:2, z:3}, ["x", "z"]);    // -> '{"x":1, "z":3}'

JSON.stringify({x:1, y:2}, null, '\t');
// -> '{
//          "x":1,
//          "y":2
//      }'

// JSON 문자열을 자바스크립트 객체로 환원하기 : JSON.parse
JSON.parse('{}');   // -> {}
JSON.parse('3.14'); // -> 3.14
JSON.parse('"abc"');    // -> "abc"
JSON.parse('true'); // -> true
JSON.parse('[2, 4, null]'); // -> [2, 4, null]
JSON.parse('{"x":1,"y":2}');    // -> {x:1, y:2}
var o = {
    name: "Tom",
    age: 17,
    marriage: false,
    data: [2, 5, null]
};
var s = JSON.stringify(o);  // -> '{"name": "Tom", "age": 17, "marriage": false, "data": [2, 5, null]}'
var p = JSON.parse(s);  // -> {name: "Tom", age: 17, marriage: false, data: [2, 5, null]}