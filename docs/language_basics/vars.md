---
sidebar_position: 1
---

# Variables and Types

Droplet is a **statically-typed language**, which means every variable has a defined type known at compile time.  
Types help the compiler check your code and prevent common errors.

---

## ✏️ Declaring Variables

Use `let` for variables that can change, and `const` for values that remain constant.

```rust
let age = 25
let name: str = "Alice"
const PI: float = 3.14159
````

---

## 📚 Basic Types

| Type    | Description        | Example                           |
| ------- | ------------------ | --------------------------------- |
| `int`   | Integer number     | `let count: int = 10`             |
| `float` | Floating-point     | `let ratio: float = 0.75`         |
| `bool`  | Boolean value      | `let active: bool = true`         |
| `str`   | String             | `let name = "Droplet"`            |
| `list`  | Ordered collection | `let nums = [1, 2, 3]`            |
| `map`   | Key-value pairs    | `let scores = {"A": 90, "B": 80}` |

---

## 🔁 Mutability

Variables declared with `let` can be reassigned:

```rust
let counter = 0
counter = counter + 1
println(counter)  // Output: 1
```

Constants declared with `const` cannot be changed:

```rust
const MAX = 5
MAX = 10  // ❌ Compile error
```

---

## 🧮 Type Inference

The compiler can automatically infer the type from the value:

```rust
let x = 42       // int
let y = 3.14     // float
let message = "Hi" // str
```

Explicit types can also be used:

```rust
let x: int = 42
```

---

## 🧰 Converting Types

Use the native function `str()` to convert values to strings:

```rust
let n = 10
println("Value is " + str(n))
```

Output:

```
Value is 10
```