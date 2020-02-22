// BDD - Behaviour Driven Development

// test suite contains 1 or more test cases
describe ("Math Test Suite", () => {
    // 'it' is called test spec/case
    it("should add two positive numbers", () => {
        //assertion
        expect(1 + 2).toBe(3);  // shallow compare
    })

    it("should add two negative numbers", () => {
        //assertion
        expect(-1 + -2).toBe(-3);  // shallow compare
    })
})