const {add,sub,mul} =  require("../src/math");

test("add numbers",()=>{
    expect(add(2,3)).toBe(5);
});

test("subtracts numbers",() => {
    expect(sub(5,3)).toBe(2);
});

test("multiples numbers",() => {
    expect(mul(4,2)).toBe(8);
});