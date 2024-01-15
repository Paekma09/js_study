/* History 객체 */
// 자바스크립트에서 URL 인코딩을 할 때는 encodeURI와 encodeURIComponent 함수를 사용합니다.
encodeURI("높이=684m");   // -> "%EB%86%92%EC%9D%B4=684m"
encodeURIComponent("높이=684m");  // -> "%EB%86%92%EC%9D%B4%3D684m"
// 자바스크립트에서 URL 디코딩을 할 때는 decodeURI와 decodeURIComponent 함수를 사용합니다.
decodeURI("%EB%86%92%EC%9D%B4=684m");   // -> "높이=684m"
decodeURIComponent("%EB%86%92%EC%9D%B4%3D684m");    // -> "높이=684m"

//1. 웹 페이지 열람 이력을 진행하거나 되돌아갈 때는 back 과 forward 메서드를 사용합니다.
history.back(); // 웹 페이지 열람 이력을 하나 되돌아간다.
history.forward();  // 웹 페이지 열람 이력을 하나 진행한다.
//2. 건너뛸 횟수를 지정해서 웹 페이지 이력을 진핼하거나 되돌아갈 때는 go 메서드를 사용합니다.
history.go(-3); // 웹 페이지 열람 이력을 세 개 되돌아간다.
history.go(2);  // 웹 페이지 열람 이력을 두 개 진행한다.
//3. 페이지를 전환하지 않고 웹 페이지 열람 이력만 추가하고자 할 때는 pushState 메서드를 사용합니다.
history.pushState(null, null, "page2.html");