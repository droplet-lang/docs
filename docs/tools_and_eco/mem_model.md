---
sidebar_position: 4
---

# Memory Model

Droplet uses a **simple memory model** suitable for learning how programming languages manage memory.  
It manages objects, variables, and function calls on a **stack and heap**.

---

## 🔹 Stack

- The **stack** stores:
  - Function call frames
  - Local variables
  - Temporary values during expression evaluation

- Each function call creates a **stack frame**.  
- Stack frames are automatically removed when the function returns.

---

## 🔄 Heap

- The **heap** stores:
  - Objects created from classes
  - Lists and maps
  - Strings

- Heap memory is **dynamically allocated** and garbage collected.

---

## ✏️ Example

```rust
class Person {
    name: str
    new(name: str) {
        self.name = name
    }
}

fn main() {
    let p = Person("Alice")  // Object allocated on heap
    println(p.name)          // Access stored on stack
}
````

* `p` is a **reference on the stack** pointing to the object in the heap.
* `p.name` accesses the property via the heap.

---

## 🧠 Notes

* Stack is **fast** but limited in size.
* Heap is **flexible** but requires management (Droplet has basic GC).
* Primitive types like `int`, `float`, and `bool` are stored **on the stack**.
* Objects, lists, and strings are stored **on the heap** and referenced from the stack.
