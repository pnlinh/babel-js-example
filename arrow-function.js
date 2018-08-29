const f1 = () => {
    return 123;
};

const f2 = () => 456;

// console.log(f1(), f2());

const f4 = defaultArg => {
    console.log(defaultArg);
};

const f5 = defaultArg => console.log(defaultArg);

const callback = () => {
    f4(123);
    f5(456);
};

console.log(callback());