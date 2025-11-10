---
sidebar_position: 17
---

# Debugging

Droplet provides a simple framework for understanding **program execution and errors**.  
As an educational language, it focuses on **learning how debugging works** in a VM-based language.

---

## 🔹 Common Runtime Errors

1. **Type Error** – Using incompatible types:
```rust
let x: int = "hello"  // ❌ Error: cannot assign string to int
````

2. **Undefined Variable** – Accessing a variable that does not exist:

```rust
println(y)  // ❌ Error: variable 'y' not defined
```

3. **Index Out of Bounds** – Accessing invalid list index:

```rust
let numbers = [1, 2, 3]
println(numbers[5])  // ❌ Error: index out of range
```

---

## 🔄 Debugging with Print Statements

Use `print()` and `println()` to **trace program flow**:

```rust
fn factorial(n: int) -> int {
    println("Calculating factorial for:", n)
    if n <= 1 {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

fn main() {
    let result = factorial(5)
    println("Factorial result:", result)
}
```

Output:

```
Calculating factorial for: 5
Calculating factorial for: 4
Calculating factorial for: 3
Calculating factorial for: 2
Calculating factorial for: 1
Factorial result: 120
```

---

## 🔧 Tips for Debugging

* Break down complex expressions into **smaller statements**.
* Print intermediate values using `println()`.
* Check variable types and ensure **proper assignments**.
* Use **small test programs** to isolate bugs.
* Observe **VM error messages** carefully—they indicate stack or type issues.

---

## 🧠 Notes

* Droplet does **not include a full debugger** like stepping or breakpoints.
* Debugging is primarily done using **print statements** and **careful code review**.
* This approach helps understand **how the VM executes instructions** and how errors propagate.
