---
sidebar_position: 9
---

# Foreign Function Interface (FFI)

Droplet allows calling **external functions** written in C through FFI.  
This is useful for extending the language or using existing libraries.

---

## 🔹 Supported Signatures

FFI currently supports three types of function signatures:

| Signature | Meaning                     |
|-----------|-----------------------------|
| `"0"`     | `int(int, int)`             |
| `"1"`     | `int(int)`                  |
| `"2"`     | `double(double, double)`    |

---

## ✏️ Example: C Library

Create a C file `mathlib.c`:

```c
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
````

Compile it to a shared library `libmath.so` (Linux) or `mathlib.dll` (Windows).

---

## 🔄 Using FFI in Droplet

```rust
@ffi("./libmath.so", sig="0")
fn add_numbers(a: int, b: int) -> int

@ffi("./libmath.so", sig="1")
fn square(x: int) -> int

@ffi("./libmath.so", sig="2")
fn power(base: float, exp: float) -> float

fn main() {
    let sum = add_numbers(10, 32)
    println("10 + 32 =", sum)

    let sq = square(7)
    println("7^2 =", sq)

    let pow_result = power(2.0, 10.0)
    println("2^10 =", pow_result)
}
```

Output:

```
10 + 32 = 42
7^2 = 49
2^10 = 1024.0
```

---

## 🧠 Notes

* Use `@ffi(path, sig="...")` to declare an external function.
* The `sig` must match the C function signature.
* FFI allows Droplet to **interact with existing C libraries** safely.
