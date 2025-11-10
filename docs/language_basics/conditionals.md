---
sidebar_position: 2
---

# Conditionals

Droplet supports **conditional statements** to control the flow of a program.  
The language provides `if` and `else if`/`else` constructs.

---

## ✏️ Basic `if` Statement

```rust
let x = 10

if x > 0 {
    println(x, "is positive")
}
````

Output:

```
10 is positive
```

---

## 🔁 `if-else` Statement

You can execute an alternative block when the condition is false:

```rust
let x = -5

if x > 0 {
    println(x, "is positive")
} else {
    println(x, "is zero or negative")
}
```

Output:

```
-5 is zero or negative
```

---

## 🔀 `if-else if-else` Chains

For multiple conditions, use `else if`:

```rust
let x = 0

if x > 0 {
    println(x, "is positive")
} else if x < 0 {
    println(x, "is negative")
} else {
    println(x, "is zero")
}
```

Output:

```
0 is zero
```

---

## 🧠 Notes

* Conditions must evaluate to a **boolean** (`true` or `false`).
* Droplet does not currently support `switch` statements — use `if-else if-else` chains instead.
