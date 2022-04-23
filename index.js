// readonly 수정 불가함
var PlayerMaker = function (name) {
    return {
        name: name
    };
};
var man = PlayerMaker('man');
man.age = 19;
// 에러 man.name = 'jung'
// tuple 한정된 타입과 수로 배열을 만들 수 있음
var a = ['man', 19, false];
// 에러 a[0] = 19
var b = ['man', 19, false];
// 에러 a[1] = 19
