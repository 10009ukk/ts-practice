// readonly 수정 불가함

type Player = {
    readonly name: string,
    age?: number
}

const PlayerMaker = (name: string) : Player => {
    return {
        name
    }
}

const man = PlayerMaker('man')
man.age = 19
// 에러 man.name = 'jung'

// tuple 한정된 타입과 수로 배열을 만들 수 있음

const a: [string, number, boolean] = ['man', 19, false]
// 에러 a[0] = 19

const b: readonly [string, number, boolean] = ['man', 19, false]
// 에러 a[1] = 19