function Person({name, age}) {
    // let name = obj.name;
    // let age = obj.age;

    console.log(`${name} | ${age}`);
}

function callback() {
    Person({
        name: 'Linh',
        age: 23
    });
}

console.log(callback());

function fn() {
    // console.log(this);
}

fn.call({
    name: 'Linh',
    age: 99
});

let argArr = [1, 2];

function callBackArg(a, b) {
    console.log(a);
    console.log(b);
}

console.log(callBackArg(...argArr));

let obj1 = {
    name: 'Linh'
};

let obj2 = {
    job: 'Develop'
};

let mergeObj = {
    ...obj1,
    ...obj2
};

console.log(mergeObj);