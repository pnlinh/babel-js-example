// Init class use old version
function PersonPure() {
    this.name = 'Linh';
    this.age = 23;

    /**
     * Pure js
     */
    // this.getName = function () {
    //     return this.name;
    // };
    //
    // this.getAge = function () {
    //     return this.age;
    // };

    /**
     * Use bind function
     */
    // let getName = function () {
    //     return this.name;
    // };
    // getName = getName.bind(this);
    //
    // let getAge = function () {
    //     return this.age;
    // };
    // getAge = getAge.bind(this);

    /**
     * Use arrow function
     * @returns {string}
     */
    let getName = () => {
        return this.name;
    };

    let getAge = () => {
        return this.age;
    };

    return {
        getName: getName,
        getAge: getAge
    };
}

let person = new PersonPure();
let name = person.getName(), age = person.getAge();
console.log(`${name} | ${age}`);

class PersonNew {
    constructor() {
        this.name = 'Linh';
        this.age = 23;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    excute() {
        return {
            getName: () => {
                return this.getName()
            },
            getAge: () => {
                return this.getAge()
            }
        };
    }
}

let personNew = new PersonNew().excute();
let nameNew = personNew.getName(), ageNew = personNew.getAge();
console.log(`${nameNew} | ${ageNew}`);