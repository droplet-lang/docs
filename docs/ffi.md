---
sidebar_position: 9
---

# Foreign Function Interface (FFI)

Droplet allows calling **external functions** written in C through FFI.
This is useful for extending the language or using existing libraries.

---

## 🔹 Supported Signatures

FFI now supports **human-readable signature strings** instead of numeric codes.

| Signature  | Meaning                          |
| ---------- | -------------------------------- |
| `"i,i->i"` | `int64_t(int64_t, int64_t)`      |
| `"i->i"`   | `int64_t(int64_t)`               |
| `"f,f->f"` | `double(double, double)`         |
| `"b->b"`   | `bool(bool)`                     |
| `"s->s"`   | `string -> string` (return only) |

> Here, `i` = int64, `f` = double, `b` = boolean, `s` = string.
> **Note:** Strings can currently only be returned from C; passing strings as arguments is not supported yet.

---

## ✏️ Example: C Library

```c
#include <stdint.h>
#include <math.h>

int64_t add_numbers(int64_t a, int64_t b) {
    return a + b;
}

int64_t square(int64_t x) {
    return x * x;
}

double power(double base, double exp) {
    return pow(base, exp);
}

// Example string return
const char* greet() {
    return "Hello from C!";
}
```

Compile it to a shared library `libmath.so` (Linux) or `mathlib.dll` (Windows).

---

## 🔄 Using FFI in Droplet

```rust
@ffi("./mathlib.dll", sig="i,i->i")
fn add_numbers(a: int, b: int) -> int

@ffi("./mathlib.dll", sig="i->i")
fn square(x: int) -> int

@ffi("./mathlib.dll", sig="f,f->f")
fn power(base: float, exp: float) -> float

@ffi("./mathlib.dll", sig="s->s")
fn greet() -> string

fn main() {
    let sum = add_numbers(10, 32)
    println("10 + 32 =", sum)

    let sq = square(7)
    println("7^2 =", sq)

    let pow_result = power(2.0, 10.0)
    println("2^10 =", pow_result)

    let message = greet()
    println(message)  // Output: "Hello from C!"
}
```

Output:

```
10 + 32 = 42
7^2 = 49
2^10 = 1024.0
Hello from C!
```

---

## 🧠 Notes

* Use `@ffi(path, sig="...")` to declare an external function.
* Droplet currently supports **integers, floats, booleans, and string returns**.
* **Strings can only be returned** from C functions; passing strings as arguments is not yet supported.
* **Coming soon:** FFI support for **objects, arrays, and more complex types**.
