---
sidebar_position: 7
---

# FFI
This is very limited and right nw it supports three type of signatures:
- (sig="0" means int(int, int))
- (sig="1" means int(int))
- (sig="2" means double(double, double))



Lets say we have a c file:
```c
// mathlib.c
#include <math.h>

int add_numbers(int a, int b) {
    return a + b;
}

int square(int x) {
    return x * x;
}

double power(double base, double exp) {
    return pow(base, exp);
}
```

Create a `mathlib.so` file.

And we can use it like:
```rust
@ffi("./libmath.so", sig="0")
fn add_numbers(a: int, b: int) -> int

@ffi("./libmath.so", sig="1")
fn square(x: int) -> int

@ffi("./libmath.so", sig="2")
fn power(base: float, exp: float) -> float

fn main() {
    println("=== FFI Examples ===")

    // Test addition (sig="0" means int(int, int))
    let sum = add_numbers(10, 32)
    println("10 + 32 =", sum)

    // Test square (sig="1" means int(int))
    let sq = square(7)
    println("7^2 =", sq)

    // Test power (sig="2" means double(double, double))
    let pow_result = power(2.0, 10.0)
    println("2^10 =", pow_result)
}
```