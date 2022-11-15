import { fibonacci } from "./fibonacci.ts";

describe("for Fibonnaci", () => {
    test("fibonacci function works", () => {
        expect(fibonacci(6)).toBe(8);
        expect(fibonacci(0)).toBe(0);
        expect(fibonacci(1)).toBe(1);
    });
});
