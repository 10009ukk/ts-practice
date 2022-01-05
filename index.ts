interface Humen {
    name:string,
    age:number,
    sex:string
}

const man = {
    name: "man",
    age: 19, // this "19" to error
    sex: "male"
}

const number = (obj:Humen):string => {
    return `str ${obj.name} num ${obj.age}`;
}

number(man);


// const number = (a:string, b:number, c?:boolean):string => {
//     return `str ${a} num ${b}`;
// }

// function number2(a:string, b:number):void {
//     // return "error!"
// }

