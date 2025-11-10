---
sidebar_position: 1
---

# Droplet Compiler

The Droplet Compiler converts **Droplet source code** (`.drop` files) into **bytecode** (`.dbc`) that can be executed by the Droplet VM.

---

## 🔹 Compiling a Program

```bash
droplet compile hello.drop
````

* `hello.drop` → Droplet source file
* Creates `hello.dbc` → bytecode file

---

## 🔄 Running Compiled Bytecode

```bash
droplet run hello.dbc
```

This executes the compiled program on the VM.

---

## ✏️ Compiler Features

* **Static type checking**
* **Function and class validation**
* **Module resolution**
* **Bytecode generation** for the VM

---

## 🔧 Example

```rust
fn main() {
    println("Hello from compiled Droplet!")
}
```

Compile and run:

```bash
droplet compile main.drop
droplet run main.dbc
```

Output:

```
Hello from compiled Droplet!
```

---

## 🧠 Notes

* Droplet is **statically typed**, so type errors are caught at compile time.
* Compilation is required before running programs on the VM.
* The compiler handles **parsing, type checking, and bytecode generation** automatically.
