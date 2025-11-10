---
sidebar_position: 7
---

# Modules and Imports

Droplet supports a **modular programming system**.  
Modules allow you to organize code into reusable files and namespaces.

---

## ✏️ Creating a Module

Create a file `lib/geometry/shapes.drop`:

```rust
mod lib.geometry.shapes

class Rectangle {
    width: float
    height: float

    new(width: float, height: float) {
        self.width = width
        self.height = height
    }

    fn area() -> float {
        return self.width * self.height
    }

    fn perimeter() -> float {
        return 2.0 * (self.width + self.height)
    }
}

class Circle {
    radius: float

    new(radius: float) {
        self.radius = radius
    }

    fn area() -> float {
        return 3.14159 * self.radius * self.radius
    }

    fn circumference() -> float {
        return 2.0 * 3.14159 * self.radius
    }
}
````

---

## 🔄 Importing Modules

Use the `import` keyword to include modules in your program:

```rust
import lib.geometry.shapes

fn main() {
    let rect = Rectangle(5.0, 10.0)
    println("Rectangle area:", rect.area())

    let circle = Circle(7.0)
    println("Circle area:", circle.area())
}
```

Output:

```
Rectangle area: 50.0
Circle area: 153.938
```

---

## 📌 Import Specific Symbols

You can import only certain classes or functions:

```rust
import lib.geometry.shapes { Rectangle }

let rect = Rectangle(3.0, 4.0)
```

---

## 🧠 Notes

* Modules are defined using `mod` followed by the namespace.
* Files should follow a folder structure matching the module path.
* Use `import` to access code from other modules.
* Modules help keep code **organized** and **reusable**.
