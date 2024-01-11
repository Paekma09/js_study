/* console 디버깅 */

function f() {
    function g() {
        function h() {
            console.trace();
        }
        h();
    }
    g();
}
f();