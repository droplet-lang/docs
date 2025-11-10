---
sidebar_position: 2
---

# Droplet VM

The Droplet Virtual Machine (VM) executes **bytecode files** (`.dbc`) produced by the Droplet compiler.  
It is a **stack-based VM** designed for learning purposes.

---

## 🔹 Running Bytecode

```bash
droplet run hello.dbc
````

* `hello.dbc` → Compiled Droplet bytecode
* The VM reads the bytecode and executes instructions sequentially.

---

## 🔄 How the VM Works

1. **Load bytecode** into memory.
2. **Execute instructions** using a stack.
3. **Manage function calls** with call frames.
4. **Handle objects and memory** (simple garbage collection is included).
5. **Call native functions** registered in the VM (`print`, `println`, `len`, `str`).

---

## ✏️ Example

Given a bytecode produced from:

```rust
fn main() {
    println("Hello from the VM!")
}
```

Running it:

```bash
droplet run main.dbc
```

Output:

```
Hello from the VM!
```

---

## 🧠 Notes

* The VM **executes only compiled bytecode**, not source code.
* Native functions are **pre-registered in the VM** and available in every program.
* VM design is simple and suitable for **educational purposes** and understanding how languages execute code.
