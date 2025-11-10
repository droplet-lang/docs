---
sidebar_position: 3
---

# Hello World

Let’s write your first Droplet program to see how the language works in practice.

---

## ✍️ Step 1. Create a File

Create a file named `hello.drop` and add the following code:

```rust
fn main() {
    println("Hello, World!")
}
````

Droplet always starts execution from the `main()` function.

---

## 🧩 Step 2. Compile the Program

Use the Droplet compiler to convert the source code into bytecode:

```bash
droplet compile hello.drop
```

This generates a bytecode file called `hello.dbc`.

---

## ⚡ Step 3. Run the Bytecode

Execute the program using the Droplet VM:

```bash
droplet run hello.dbc
```

Output:

```
Hello, World!
```

---

## 🧠 How It Works

1. The **compiler** reads the source file and produces bytecode.
2. The **VM** interprets and executes the bytecode.
3. Built-in native functions like `println()` handle output.

---
