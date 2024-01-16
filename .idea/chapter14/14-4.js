/* 스크롤한 거리를 구하는 함수(크로스 브라우징 대응) */
function getScrollTop() {
    if ( window.pageYOffset !== undefined ) {
        return window.pageYOffset;
    } else {
        return document.documentElement.scrollTop || document.body.scrollTop;
    }
}
function getScrollLeft() {
    if ( window.pageXOffset !== undefined ) {
        return window.pageXOffset;
    } else {
        return document.documentElement.scrollLeft || document.body.scrollLeft;
    }
}