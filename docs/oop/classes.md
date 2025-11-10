---
sidebar_position: 1
---

# Classes and Objects

Droplet supports **object-oriented programming** with classes, objects, and methods.  
Classes are templates for creating objects, which are instances of the class.

---

## ✏️ Defining a Class

```rust
class Animal {
    name: str
    age: int

    // Constructor
    new(name: str, age: int) {
        self.name = name
        self.age = age
    }

    // Method
    fn getInfo() -> str {
        return self.name + " is " + str(self.age) + " years old"
    }

    fn speak() -> void {
        println("Animal makes a sound")
    }
}
````

---

## 🔄 Creating Objects

```rust
fn main() {
    let animal = Animal("Leo", 5)
    animal.speak()
    println(animal.getInfo())
}
```

Output:

```
Animal makes a sound
Leo is 5 years old
```

---

## 🧩 Accessing Properties

Use the `self` keyword inside the class to access instance variables:

```rust
fn birthday() {
    self.age = self.age + 1
}
```

---

## 🧠 Notes

* The `new` function is a **constructor** automatically called when creating an object.
* Methods can return values using `return`.
* Objects store their own **state** in instance variables.
* All classes are **single-inheritance capable**, but Droplet does not support multiple inheritance.
