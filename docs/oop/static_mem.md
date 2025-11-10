---
sidebar_position: 3
---

# Static Members

Droplet supports **static members** in classes.  
Static variables and methods belong to the class itself, not to individual objects.

---

## ✏️ Static Variables

```rust
class MathHelper {
    static PI: float = 3.14159

    new() {
        // Constructor can be empty
    }
}
````

Access static variables using the class name:

```rust
fn main() {
    println("PI value:", MathHelper.PI)
}
```

Output:

```
PI value: 3.14159
```

---

## 🔄 Static Methods

Static methods are defined with the `static` keyword and can only access static members:

```rust
class MathHelper {
    static fn square(x: int) -> int {
        return x * x
    }
}
```

Call static methods using the class name:

```rust
fn main() {
    let result = MathHelper.square(5)
    println("5 squared:", result)
}
```

Output:

```
5 squared: 25
```

---

## 🧠 Notes

* Static members exist **once per class**, not per object.
* You cannot access instance variables (`self`) inside a static method.
* Use static members for utility functions or constants related to the class.
