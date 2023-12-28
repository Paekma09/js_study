// 실행 문맥
ExecutionContext = {
    // 렉시컬 환경 컴포넌트
    LexicalEnviroment: {
        // 환경 레코드
        EnviromentRecord: {
            // 선언적 환경 레코드
            DeclarativeEnviroment: {},
            // 객체 환경 레코드
            ObjectEnviromentRecord: {}
        },
        // 외부 렉시컬 환경 참조
        OuterLexicalEnviroment_Reference: {}
    },
    // 변수 환경 컴포넌트
    VariableEnviroment: {},
    // 디스 바인딩 컴포넌트
    ThisBinding: null,
}
this === window // -> true
// 전역 환경
GlobalEnviroment = {
    // 전역 환경의 환경 레코드인 객체 환경 레코드에 window의 참조가 설정되어 있음
    ObjectEnviromentRecord: {
        bindObject: window
    },
    OuterLexicalEnviroment_Reference: null
}
// 전역 실행 문맥
ExecutionContext = {
    LexicalEnviroment: GlobalEnviroment,
    ThisBinding: window,
}

var a = { x: 1, y:  2 };
console.log(window.a);  // -> Object { x=1, y=2 }
function norm(x) {

}
console.log(window.norm);   // -> norm(x)
console.log(Object.getOwnPropertyDescriptor(window, 'a'));  // -> Object {value: {...}, writable: true, enumerable: true, configurable: false}
delete a;
console.log(a); // -> Object { x:1, y:2 }
a = { x: 1, y: 2 };
console.log(Object.getOwnPropertyDescriptor(window, 'a'));  // -> Object {value: {...}, writable: true, enumerable: true, configurable: true}
delete a;
console.log(a); // -> Uncaught ReferenceError: a is not defined

var a = "A";
function f() {
    var b = "B";
    function g() {
        var c = "C";
        console.log(a+b+c);
    }
    g();
}
f();    // -> ABC
