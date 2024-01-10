/* Map */

// Map 객체의 생성
var map = new Map();
console.log(map);   // -> Map {}
var zip = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
console.log(zip);   // -> Map {"Tom" => "131-8634", "Huck" => "556-0002"}
function* makeZip() {
    yield ["Tom", "131-8634"];
    yield ["Huck", "556-0002"];
}
var zips = makeZip();
zip = new Map(zips);
console.log(zip);   // -> Map {"Tom" => "131-8634", "Huck" => "556-0002"}
console.log(zip.size);  // -> 2

// 데이터 추가하기
var zip1 = new Map();
zip1.set("Tom", "131-8634");
zip1.set("Huck", "556-0002");
console.log(zip1);  // -> Map {"Tom" => "131-8634", "Huck" => "556-0002"}

// 값 읽기
console.log(zip1.get("Tom"));   // -> 131-8634

// 데이터가 있는지 확인
console.log(zip1.has("Tom"));   // -> true
console.log(zip1.has("Becky")); // -> false

// 데이터의 삭제
zip1.delete("Huck");
zip1.clear();

// 모든 키 값의 열거
var zip2 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
var iter2 = zip2.keys();
for (var v of iter2) console.log(v); // Tom, Huck의 순서대로 출력

// 모든 값의 열거
var zip3 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
var iter3 = zip3.values();
for (var v of iter3) console.log(v);    // 131-8634, 556-0002의 순서대로 출력

// 모든 데이터의 열거
var zip4 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
var iter4 = zip4.entries();
for (var v of iter4) console.log(v);    // ["Tom", "131-8634"],["Huck", "556-0002"]의 순서대로 출력

var zip5 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
for (var v of zip5) console.log(v);    // ["Tom", "131-8634"],["Huck", "556-0002"]의 순서대로 출력

var zip6 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
for (var [key, value] of zip6) console.log(key, value);    // Tom 131-8634, Huck 556-0002의 순서대로 출력

// 모든 데이터를 함수로 처리하기
var zip7 = new Map([["Tom", "131-8634"],["Huck", "556-0002"]]);
zip7.forEach(function (value, key, map) {
    console.log(key + " => " + value);
});
// -> Tom => 131-8634
//    Huck => 556-0002