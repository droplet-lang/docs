---
sidebar_position: 6
---

# Modules and Imports
Creating a module is easy.

Lets create `lib/geometry/shape.drop` file:
```rust
mod lib.geometry.shapes

import lib.math.basic

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

fn calculateSquareArea(side: float) -> float {
    return side * side
}
```

and create another file `lib/math/basic.drop`.
```rust
mod lib.math.basic

fn add(a: int, b: int) -> int {
    return a + b
}

fn subtract(a: int, b: int) -> int {
    return a - b
}

fn multiply(a: int, b: int) -> int {
    return a * b
}

fn divide(a: int, b: int) -> float {
    return a / b
}

fn square(x: int) -> int {
    return x * x
}

fn cube(x: int) -> int {
    return x * x * x
}
```

Now in `main.drop`:
```rust
import lib.math.basic
import lib.geometry.shapes

// Or import specific symbols
// import math.basic { add, multiply, square }
// import geometry.shapes { Rectangle, Circle }

fn main() {
    println("=== Module System Demo ===")
    println()

    // Use functions from math.basic
    println("--- Math Operations ---")
    let sum = add(10, 20)
    println("10 + 20 =", sum)

    let product = multiply(5, 7)
    println("5 * 7 =", product)

    let sq = square(9)
    println("9^2 =", sq)

    let cb = cube(4)
    println("4^3 =", cb)

    // Use classes from geometry.shapes
    println()
    println("--- Geometry ---")

    let rect = Rectangle(5.0, 10.0)
    println("Rectangle(5x10) area:", rect.area())
    println("Rectangle(5x10) perimeter:", rect.perimeter())

    let circle = Circle(7.0)
    println("Circle(r=7) area:", circle.area())
    println("Circle(r=7) circumference:", circle.circumference())

    // Use function from geometry module
    let sqArea = calculateSquareArea(6.0)
    println("Square(side=6) area:", sqArea)
}
```