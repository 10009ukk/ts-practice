// generic 마음대로 이름을 지정할 수 있음
// 그리고 타입스립트가 자동으로 call signatures 를 유추해줌
// any 와는 다름

function nextLevel<V>(arr: V[]) {
    return arr[0]
}

const a = nextLevel([1, 2, 3, 4])
const b = nextLevel([1, "2", true, 4])

// generic 활용
// 코드 확장, 재활용 같은 상속?

type Player<E> = {
    name: string
    extraInfo: E
}

type ManExtra = {
    favFood: string
}

const man: Player<ManExtra> = {
    name: 'man',
    extraInfo: {
        favFood: 'mandu'
    }
}

const guk: Player<null> = {
    name: 'guk',
    extraInfo: null
}

const c: number[] = [1, 2, 3, 4]
const d: Array<number> = [1, 2, 3, 4]
// useState<number>()