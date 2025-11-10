---
sidebar_position: 2
---

# Inheritance

Droplet supports **single inheritance**, allowing a class to extend another class and reuse its properties and methods.

---

## ✏️ Basic Inheritance

```rust
class Animal {
    name: str
    age: int

    new(name: str, age: int) {
        self.name = name
        self.age = age
    }

    fn speak() -> void {
        println("Animal makes a sound")
    }

    fn getInfo() -> str {
        return self.name + " is " + str(self.age) + " years old"
    }
}

class Dog: Animal {
    breed: str

    new(name: str, age: int, breed: str) {
        self.name = name
        self.age = age
        self.breed = breed
    }

    fn speak() -> void {
        println("Woof! I'm", self.name)
    }

    fn fetch() -> void {
        println(self.name, "is fetching the ball!")
    }
}
````

---

## 🔄 Using Inherited Classes

```rust
fn main() {
    let dog = Dog("Max", 3, "Labrador")
    dog.speak()        // Overridden method
    dog.fetch()        // New method in Dog
    println(dog.getInfo()) // Inherited method from Animal
}
```

Output:

```
Woof! I'm Max
Max is fetching the ball!
Max is 3 years old
```

---

## 🧠 Notes

* A child class can **override methods** from the parent class.
* Use `self` to refer to instance variables and methods.
* Droplet currently supports **single inheritance only**.
* Constructors in child classes should explicitly initialize parent properties if needed.
