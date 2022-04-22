// 변수에 타입을 명시하거나, 함수 리턴의 타입을 명시하는 건 그리 중요치 않음
// 타입 스크립트 내부에서 알아서 추론하기 때문
// 옵셔널 
// 매개 변수나 오브젝트 그리고 if 문을 대신에서 사용함
// 없으면 무시, 있으면 실행
function printName(obj) {
    var _a;
    console.log((_a = obj.sex) === null || _a === void 0 ? void 0 : _a.toUpperCase());
}
printName({ name: "chichi", sex: 'female' });
// 유니언
// 유니언 타입의 값은 타입 멤버중에 하나를 가질 수 있음
// 해당 유니언 타입의 모든 멤버에 대하여 유효한 작업일 때에만 허용됩니다. 
// 예를 들어 string | number라는 유니언 타입의 경우, string 타입에만 유효한 메서드는 사용할 수 없습니다.
function printId(id) {
    console.log("Your ID is: " + id);
    // 에러 console.log(id.toUpperCase())
}
printId(101);
printId("202");
// 에러 printId({ myID: 22342 });
