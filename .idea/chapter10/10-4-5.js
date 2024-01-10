/* Set */

// Set 객체의 생성
var set = new Set();
console.log(set);   // -> Set {}
var zip = new Set(["131-8634", "556-0002"]);
function* makeZip() {
    yield "131-8634";
    yield "556-0002";
}
var zips = makeZip();
zip = new Set(zips);
console.log(zip);   // -> Set {"131-8634", "556-0002"}
console.log(zip.size);  // -> 2

// 데이터의 삽입
var zip1 = new Set();
zip1.add("131-8634");
zip1.add("556-0002");
console.log(zip1);  // -> Set {"131-8634", "556-0002"}

// 데이터가 있는지 확인
console.log(zip1.has("131-8634"));  // -> true
console.log(zip1.has("154-0000"));  // -> false

// 데이터의 삭제
zip1.delete("131-8634");
zip1.clear();

// 전체 데이터 값의 열거
var zip2 = new Set(["131-8634", "556-0002"]);
var iter2 = zip2.keys();
for (var v of iter2) console.log(v);    // -> 131-8634, 556-0002의 순서대로 출력한다

var zip3 = new Set(["131-8634", "556-0002"]);
var iter3 = zip3.entries();
for (var v of iter3) console.log(v);    // -> ["131-8634", "131-8634"], ["556-0002", "556-0002"]의 순서대로 출력한다

var zip4 = new Set(["131-8634", "556-0002"]);
for (var v of zip4) console.log(v);    // -> 131-8634, 556-0002의 순서대로 출력한다

// 모든 데이터를 함수로 처리하기
var zip5 = new Set(["131-8634", "556-0002"]);
zip5.forEach(function (value, value2, set) {
    console.log(value + " => " + value2);
});
// -> 131-8634 => 131-8634
//    556-0002 => 556-0002