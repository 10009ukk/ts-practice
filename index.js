class Humen {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
}
const man = new Humen("man", 19, "male");
const number = (obj) => {
    return `str ${obj.name} num ${obj.age}`;
};
number(man);
// const number = (a:string, b:number, c?:boolean):string => {
//     return `str ${a} num ${b}`;
// }
// function number2(a:string, b:number):void {
//     // return "error!"
// }
//# sourceMappingURL=index.js.map