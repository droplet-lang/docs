---
sidebar_position: 8
---

# Native Functions

Droplet provides a set of **built-in native functions** that are available without importing any module.  
These functions are implemented in the VM for basic operations like printing, converting types, and checking lengths.

---

## 🔹 Common Native Functions

| Function      | Description                                    | Example |
|---------------|-----------------------------------------------|---------|
| `print()`     | Prints values without a newline               | `print("Hello")` |
| `println()`   | Prints values with a newline                  | `println("Hello")` |
| `str()`       | Converts a value to a string                   | `println(str(10))` |
| `len()`       | Returns the length of a list or string        | `println(len([1,2,3]))` |

---

## ✏️ Examples

### Printing

```rust
println("Hello, Droplet!")
print("This is inline")
````

Output:

```
Hello, Droplet!
This is inline
```

---

### String Conversion

```rust
let num = 42
println("Number as string: " + str(num))
```

Output:

```
Number as string: 42
```

---

### Length Function

```rust
let arr = [1, 2, 3, 4, 5]
let message = "Hello"
println("Array length:", len(arr))
println("String length:", len(message))
```

Output:

```
Array length: 5
String length: 5
```

---

## 🧠 Notes

* Native functions are **always available** in any Droplet program.
* They handle basic operations commonly needed in small programs.
* These functions provide a simple foundation for **learning how language features work**.
