// call signatures

type Add = (a:number, b:number) => number
const add:Add = (a, b) => a + b
// 에러 const add:Add = (a, b) => {a + b}

type SuperPrint = {
    // generic 은 call signatures 를 대체할 수 있음
    // 타입 스크립트 내에서 모든 타입을 유추함
    <TypePlacehorder>(arr: TypePlacehorder[]): TypePlacehorder
    // <T>(arr: T[]): T
    
    // (arr: number[]): void
    // (arr: boolean[]): void
    // (arr: string[]): void
    // (arr: (number | boolean)[]): void
}


const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
    return arr[0]
}

superPrint([1, 2, 3, 4])
superPrint([true, false, true])
superPrint(["1", "2", "3", "4"])
superPrint([1, true, 3, "4"])
