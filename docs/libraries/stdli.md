---
sidebar_position: 1
---

# 🧩 Standard Library (stdlib)

The **Droplet Standard Library (`stdlib`)** provides foundational classes and functions to handle basic types, console input/output, and more.

You can install it easily using the Droplet package manager **Drip**.

---

## 📦 Installation

```bash
drip install https://github.com/droplet-lang/stdlib
````

Once installed, you can import modules as needed:

```droplet
import stdlib.types.basic
import stdlib.console.io
```

---

## 📁 Modules Overview

| Module               | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `stdlib.types.basic` | Core data type wrappers like `Int`, `Float`, and `Bool`      |
| `stdlib.console.io`  | Input/output helpers for reading and printing to the console |

---

## 🧮 `stdlib.types.basic`

This module provides object-oriented wrappers around Droplet’s primitive types.
It adds useful methods and operator overloads for easier manipulation.

### Example

```droplet
import stdlib.types.basic

fn main() {
    let a = Int(10)
    let b = Int(5)
    let sum = a + b
    println("Sum: " + sum.toString())

    let f = Float(3.14)
    println("Float value: " + f.toString())

    let flag = Bool(true)
    println("Flag: " + flag.toString())
}
```

---

### 🔹 Class: `Int`

#### Constructor

```droplet
new(value: int)
```

#### Methods

| Method            | Return | Description                        |
| ----------------- | ------ | ---------------------------------- |
| `get()`           | `int`  | Returns the internal integer value |
| `set(value: int)` | `void` | Sets the internal value            |
| `toString()`      | `str`  | Converts the integer to a string   |
| `abs()`           | `Int`  | Returns the absolute value         |

#### Operator Overloads

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `==`     | Equality check |
| `<`, `>` | Comparison     |

---

### 🔹 Class: `Float`

#### Constructor

```droplet
new(value: float)
```

#### Methods

| Method              | Return  | Description                      |
| ------------------- | ------- | -------------------------------- |
| `get()`             | `float` | Returns the internal float value |
| `set(value: float)` | `void`  | Sets the internal value          |
| `toString()`        | `str`   | Converts to a string             |
| `abs()`             | `Float` | Returns absolute value           |

#### Operator Overloads

| Operator | Meaning        |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `==`     | Equality check |

---

### 🔹 Class: `Bool`

#### Constructor

```droplet
new(value: bool)
```

#### Methods

| Method             | Return | Description                   |
| ------------------ | ------ | ----------------------------- |
| `get()`            | `bool` | Returns internal value        |
| `set(value: bool)` | `void` | Sets internal value           |
| `toString()`       | `str`  | Returns `"true"` or `"false"` |

#### Operator Overloads

| Operator | Meaning        |
| -------- | -------------- |
| `==`     | Equality check |

---

## 💬 `stdlib.console.io`

This module provides simple input/output functions for console-based interaction.

### Example

```droplet
import stdlib.console.io

fn main() {
    let reader = Reader()
    let writer = Writer()

    writer.print("Enter your name: ")
    let name = reader.nextLine()

    writer.println("Hello, " + name + "!")
}
```

---

### 🔹 Class: `Reader`

#### Methods

| Method        | Return  | Description                   |
| ------------- | ------- | ----------------------------- |
| `nextLine()`  | `str`   | Reads a full line as a string |
| `nextInt()`   | `int`   | Reads an integer value        |
| `nextFloat()` | `float` | Reads a floating-point number |

---

### 🔹 Class: `Writer`

#### Static Methods

| Method              | Description                            |
| ------------------- | -------------------------------------- |
| `print(msg: str)`   | Prints a message without a newline     |
| `println(msg: str)` | Prints a message followed by a newline |

---

## 🚀 Summary

| Module                   | Purpose                                             |
| ------------------------ | --------------------------------------------------- |
| **`stdlib.types.basic`** | Provides type-safe wrappers with operator overloads |
| **`stdlib.console.io`**  | Simplifies reading and writing from the console     |

---

🧠 **Tip:**
You can use the standard library modules together to build fully interactive Droplet programs with clean and structured code.
