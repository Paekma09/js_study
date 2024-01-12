/* 문자열 치환하기 : replace 메서드 */

// replace 메서드의 기본적인 사용법
var s = "1 little,2 little indian";
console.log(s.replace(/indian/,"boy")); // -> 1 little,2 little boy
console.log(s.replace(/little/,"big")); // -> 1 big,2 little indian
console.log(s.replace(/little/g,"big"));    // -> 1 big,2 big indian

// 치환 패턴 : $n, $&
var person = "Tom, tom@example.com, 010-1234-5678";
var result = person.replace(/0(\d{1,4}-\d{1,4}-\d{4})/g, "+82-$1");
console.log(result);    // -> Tom, tom@example.com, +82-109-1234-5678

var date = "오늘은 2016년9월10일 입니다.";
var result1 = date.replace(/(\d+)년(\d+)월(\d+)일/, "$1/$2/$3");
console.log(result1);   // -> 오늘은 2016/0/10 입니다.

var name = "Tom Sawyer";
var result2 = name.replace(/(\w+)\s(\w+)/, "$2 $1");
console.log(result2);   // -> Sawyer Tom

var address = "121-842 서울특별시 마포구 월드컵로10길 56";
var result3 = address.replace(/\d{3}-\d{3}/, "㉾$&");
console.log(result3);   // -> ㉾121-842 서울특별시 마포구 월드컴로10길 56

// 문자열 치환을 처리하는 함수
