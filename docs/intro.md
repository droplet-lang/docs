---
sidebar_position: 1
---

# Introduction to Droplet

Droplet is a small, statically-typed, object-oriented programming language designed for learning purposes.  
It compiles source code into bytecode, which runs on a simple stack-based virtual machine called the **Droplet VM (DLVM)**.

The main goal of Droplet is to help students and enthusiasts understand **how programming languages work** — from syntax and compilation to execution on a virtual machine.

---

## 🎯 Purpose

Droplet is not intended for production or large-scale software.  
Instead, it serves as a **learning project** to explore key ideas behind programming language design, including:

- How compilers parse and analyze code  
- How bytecode is generated and executed  
- How functions, classes, and objects are represented at runtime  
- How a simple virtual machine manages memory and control flow  

By studying Droplet’s source code and examples, learners can gain a deeper understanding of programming language internals without needing to read overly complex implementations.

---

## 🧩 Components of Droplet

Droplet consists of a few main tools that work together:

| Component | Description |
|------------|--------------|
| **Droplet Compiler (`droplet`)** | Converts `.drop` source code into `.dbc` bytecode. |
| **Droplet Virtual Machine (DLVM)** | Executes compiled Droplet bytecode. |
| **Drip Package Manager (`drip`)** | Manages projects and dependencies written in Droplet. |
| **VS Code Extension** | Adds syntax highlighting and language support for Droplet files. |

Each of these components is designed to be simple, readable, and open for exploration.

---

## 🧠 What You Can Learn

By experimenting with Droplet, you can explore:

- How parsing and tokenization work  
- How function calls and classes are represented in bytecode  
- How stack-based VMs handle execution  
- How basic garbage collection works  
- How language features like inheritance and overloading can be implemented  

Droplet is intentionally small, so it’s easier to read, modify, and extend.

---

## 🧩 Example Program

```rust
fn main() {
    println("Hello from Droplet!")
}
````

When compiled and executed, this program will print:

```
Hello from Droplet!
```

---

## ⚙️ How It Works (At a Glance)

1. The **compiler** reads your `.drop` file and generates `.dbc` bytecode.
2. The **Droplet VM** interprets and executes the bytecode.
3. Built-in native functions like `print`, `println`, and `len` handle I/O and basic operations.

---
