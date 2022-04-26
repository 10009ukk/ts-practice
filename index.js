// generic 마음대로 이름을 지정할 수 있음
// 그리고 타입스립트가 자동으로 call signatures 를 유추해줌
// any 와는 다름
function nextLevel(arr) {
    return arr[0];
}
var a = nextLevel([1, 2, 3, 4]);
var b = nextLevel([1, "2", true, 4]);
var man = {
    name: 'man',
    extraInfo: {
        favFood: 'mandu'
    }
};
var guk = {
    name: 'guk',
    extraInfo: null
};
var c = [1, 2, 3, 4];
var d = [1, 2, 3, 4];
// useState<number>()
