---
sidebar_position: 13
---

# VSCode Extension

Droplet has a **Visual Studio Code extension** to help write and navigate Droplet code.  
It provides **syntax highlighting**, **basic code completion**, and **outline view** for classes and functions.

---

## 🔹 Installing the Extension

1. Open VSCode.  
2. Go to **Extensions** (Ctrl+Shift+X).  
3. Search for `Droplet Language` and install.  
4. Alternatively, download from the [releases page](https://github.com/droplet-lang/lang/releases).

---

## 🔄 Features

- **Syntax Highlighting**: Droplet keywords, types, and operators are highlighted.  
- **Outline View**: Shows functions and classes in a collapsible hierarchy.  
- **Code Snippets**: Predefined templates for common structures (`fn main`, `class`, `if/else`).  
- **Error Highlighting**: Basic compile-time type and syntax errors.

---

## ✏️ Example: Outline View

Given this code:

```rust
class Animal {
    name: str
    fn speak() { println("sound") }
}

fn main() {
    let a = Animal("Leo")
    a.speak()
}
````

The **Outline panel** shows:

```
- Animal
    - name
    - speak()
- main()
```

---

## 🧠 Notes

* The extension **does not replace the compiler**; it only aids in writing code.
* For execution, always **compile with `droplet compile`** and **run with `droplet run`**.
* Extension is intended for **educational purposes** and code navigation.
