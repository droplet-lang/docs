---
sidebar_position: 4
---

# Functions

Functions in Droplet allow you to **group reusable code** and organize your program.  
They can accept parameters and return values.

---

## ✏️ Defining a Function

Use the `fn` keyword:

```rust
fn greet(name: str) {
    println("Hello,", name)
}

fn main() {
    greet("Alice")
}
````

Output:

```
Hello, Alice
```

---

## 🔁 Functions with Return Values

Use the `->` arrow to specify the return type and `return` to return a value:

```rust
fn add(a: int, b: int) -> int {
    return a + b
}

fn main() {
    let sum = add(5, 7)
    println("Sum:", sum)
}
```

Output:

```
Sum: 12
```

---

## 🔄 Parameters and Type Annotations

Droplet requires the type of each parameter:

```rust
fn multiply(x: int, y: int) -> int {
    return x * y
}
```

---

## ⚡ Functions Without Return

If a function does not return anything, use `void`:

```rust
fn sayHello() -> void {
    println("Hello!")
}
```

---

## 🧠 Notes

* All programs start execution from `main()`.
* Functions must be declared before they are called (or imported via modules).
* Functions can call other functions, including themselves (recursion).
