/* Location 객체 */
//1. 다음 두 코드는 모두 해당 URL이 가리키는 문서를 읽어 들입니다.
location.href = "http://www.gilbut.co.kr/";
location.assign("http://www.gilbut.co.kr/");
//2. URL이 가리키는 문서를 읽어 들일 때 이력을 남기지 않으려면 replace 메서드를 사용합니다.
location.replace("http://www.gilbut.co.kr/");
//3. 다음 코드는 3초 후에 같은 사이트의 다른 페이지로 이동(리다이렉트)하는 예입니다.
setTimeout(function () {
    location.replace("/book/bookList.aspx");
}, 3000);
//4. reload 메서드를 사용하면 현재의 페이지를 다시 읽어 들일 수 있습니다.
location.reload();
//5. hash 프로퍼티에 HTML 요소의 id 속성 값을 대입하면 그 HTML 요소로 그크롤합니다.
location.hash = "#header";  // -> id = "header"인 HTML 요소롤 스크롤하기
//6. search 프로퍼티 값을 바꾸면 서버에 질의 문자열을 보냅니다.
location.search = "some data";  // -> URL 끝에 "?some%20data"를 덧붙여 서버에 보낸다