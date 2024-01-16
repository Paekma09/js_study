/* 창 제어하기 */
// 위치를 변경하려면 moveBy 와 moveTo 메서드를 사용합니다.
w.moveBy(10, 20);   // 수평 방향(오른쪽)으로 10px 이동하고 수직 방향(아래쪽)으로 20px 이동
w.moveTo(100, 150); // 창의 왼쪽 좌표(100, 150)로 이동
// 크기를 변경하여면 resizeBy 와 resizeTo 메서드를 사용합니다.
w.resizeBy(10, 20); // 너비를 10px, 높이를 20px 키운다.
w.resizeTo(200, 150);   // 너비를 200px, 높이를 150px로 설정한다.
// 창에 표시되는 페이지를 스크롤하려면 scrollBy 와 scrollTo 메서드를 사용합니다.
w.scrollBy(0, 100); // 아래쪽으로 100px 스크롤한다.
w.scrollTo(0, 0);   // 시작 위치로 이동한다.