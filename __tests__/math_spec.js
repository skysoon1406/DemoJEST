
function sum(a,b)  {
    return a+b;
}

test("1+2 = 3",() => {
    expect(sum(1,2)).toBe(3);
});  


test("2+2 = 4",() => {
    expect(sum(2,2)).toBe(4);
});

test("加法器",() => {
    expect(sum(1,2)).toBe(3);
    expect(sum(2,2)).toBe(4);
});
