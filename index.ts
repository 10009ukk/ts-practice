// unknown 어떤 값이 들어올지 모르는 경우

let a: unknown
// 에러 a = a + 1

if (typeof a === 'number') {
    a = a + 1
}

// never 리턴 시키지 않은 채로 에러 발생 시키거나, 실행이 불가능한 경우
function hello(): never {
    throw new Error("ERrr!");
}
