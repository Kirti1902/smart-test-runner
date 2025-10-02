const {add,sub} = require("../src/utils/math.js");

test("add numbers",()=>{
    expect(add(2,3)).toBe(5);
});

test("subtracts numbers",() => {
    expect(sub(5,3)).toBe(2);
});