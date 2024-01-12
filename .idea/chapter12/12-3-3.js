/* 문자열 추출하기 : match 메서드 */
var url = /\b(\w+):\/{2}([\w.]+)\/(\S*)\b/;
var text = "Tom의 홈페이지 URL은 http://www.example.com/~tom 입니다.";
console.log(text.match(url));   // -> ["http://www.example.com/~tom", "http", "www.example.com", "~tom"]