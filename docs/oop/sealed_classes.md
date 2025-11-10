---
sidebar_position: 6
---

# Sealed Classes

Sealed classes in Droplet **cannot be inherited from**.  
They are used to prevent further subclassing.

---

## ✏️ Defining a Sealed Class

```rust
seal class FinalClass {
    value: int

    new(value: int) {
        self.value = value
    }

    fn show() {
        println("Value:", self.value)
    }
}
````

---

## 🔄 Attempting to Inherit

```rust
class Child: FinalClass {}  // ❌ Error: cannot inherit from sealed class
```

---

## 🧠 Notes

* Use `seal` before `class` to make it **final**.
* Sealed classes are useful for **utility classes** or **constants containers**.
* Droplet enforces this at **compile time** to prevent subclassing.
