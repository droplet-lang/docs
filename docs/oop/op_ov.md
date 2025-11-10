---
sidebar_position: 5
---

# Operator Overloading

Droplet allows classes to **define custom behavior** for operators like `+`, `-`, `*`, and `==`.  
This helps make objects behave more naturally in expressions.

---

## ✏️ Example: 2D Vector

```rust
class Vector2D {
    x: float
    y: float

    new(x: float, y: float) {
        self.x = x
        self.y = y
    }

    op +(other: Vector2D) -> Vector2D {
        return Vector2D(self.x + other.x, self.y + other.y)
    }

    op -(other: Vector2D) -> Vector2D {
        return Vector2D(self.x - other.x, self.y - other.y)
    }

    op *(scalar: float) -> Vector2D {
        return Vector2D(self.x * scalar, self.y * scalar)
    }

    op ==(other: Vector2D) -> bool {
        return self.x == other.x && self.y == other.y
    }

    fn print() {
        println("Vector(", self.x, ",", self.y, ")")
    }
}
````

---

## 🔄 Using Overloaded Operators

```rust
fn main() {
    let v1 = Vector2D(3.0, 4.0)
    let v2 = Vector2D(1.0, 2.0)

    let v3 = v1 + v2
    v3.print()  // Vector(4.0, 6.0)

    let v4 = v1 - v2
    v4.print()  // Vector(2.0, 2.0)

    let v5 = v1 * 2.0
    v5.print()  // Vector(6.0, 8.0)

    println("v1 equals v2?", v1 == v2)  // false
}
```

---

## 🧠 Notes

* Use `op` keyword followed by the operator to define custom behavior.
* Supported operators: `+`, `-`, `*`, `/`, `==`, and more.
* Operator overloading works only for **class objects**.
