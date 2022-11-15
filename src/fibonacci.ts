export function fibonacci(n: number): number {
    const start = process.hrtime.bigint();
    if (n <= 1) {
        return n;
    }
    let num1 = 0;
    let num2 = 1;
    let result = 0;

    for (let i = 2; i <= n; i++) {
        result = num2 + num1;
        num1 = num2;
        num2 = result;
    }
    const end = process.hrtime.bigint();
    console.log(`${n} took` + " " + (end - start) + " " + `nanoseconds`);
    return result;
}

fibonacci(3);
fibonacci(10);
fibonacci(20);
fibonacci(40);
fibonacci(60);
fibonacci(100);
fibonacci(150);
fibonacci(200);
fibonacci(500);
fibonacci(1000);
fibonacci(5000);
fibonacci(10000);
