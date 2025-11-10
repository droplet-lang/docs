---
sidebar_position: 3
---

# Strings

Strings in Droplet are **sequences of characters** used to represent text.  
They are immutable and support basic operations like concatenation and printing.

---

## ✏️ Creating Strings

```rust
let greeting = "Hello"
let name = "Alice"
````

---

## ➕ Concatenating Strings

Use the `+` operator to join strings:

```rust
let message = greeting + " " + name
println("Message:", message)
```

Output:

```
Message: Hello Alice
```

---

## 🔢 Accessing Characters

You can access individual characters using square brackets:

```rust
let firstChar = name[0]
println("First character of name:", firstChar)
```

Output:

```
First character of name: A
```

---

## 🔄 String Interpolation

Currently, Droplet does not have native interpolation, but you can concatenate strings and variables:

```rust
let age = 25
println("Name: " + name + ", Age: " + str(age))
```

Output:

```
Name: Alice, Age: 25
```

---

## 🧠 Notes

* Strings are immutable — modifying a string creates a new string.
* Use `str()` to convert numbers, booleans, or other values to strings.
* Built-in native functions like `print()` and `println()` handle strings directly.
