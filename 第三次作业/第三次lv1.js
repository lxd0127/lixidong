
let H = { name: "HUAWEI", age: 34, gender: 'unknow' };

let A = new Object();
A.name = 'Apple Inc';
A.age = 45;
A.gender = 'unknow'

function Samsung() {
    this.name = 'Samsung';
    this.age = 83;
    this.gender = 'unknow'
}
let S = new Samsung();


function copy(insertObj) {
    let newObj = {};
    for (let i in insertObj) {
        newObj[i] = insertObj[i];
    }
    return newObj;
}

let obj1 = copy(H);
let obj2 = copy(A);
let obj3 = copy(S);


let arr = [];


arr.push(obj1, obj2, obj3);


console.table(arr);