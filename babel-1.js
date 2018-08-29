// Init class use old version
function Person() {
    this.name = 'Linh';
    this.age = 23;

    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    }
}

let person = new Person();
let name = person.getName(), age = person.getAge();
console.log(`${name} | ${age}`);

// Use anonymous function
let PersonObject = function () {
    this.name = 'Linh';
    this.age = 23;

    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    }
};

let personObj = new PersonObject();
let nameObj = personObj.getName(), ageObj = personObj.getAge();
console.log(`${nameObj} | ${ageObj}`);

// Use arrow function
let PersonArrow = () => {
    this.name = 'Linh';
    this.age = 23;

    this.getName = function () {
        return this.name;
    };

    this.getAge = function () {
        return this.age;
    }
};