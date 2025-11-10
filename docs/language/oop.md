---
sidebar_position: 5
---

# OOP Features

## Class and Object
```rust
class Animal {
    name: str
    age: int

    // if var name matches with the constructor, it assumes its a class level var
    new(name: str, age: int) {
    }

    fn getInfo() -> str {
        return self.name
    }

    fn speak() -> void {
        println("Animal makes a sound")
    }
}

fn main() {
    let animal = Animal("Generic", 5)
    animal.speak()
    let info = animal.getInfo()
    println("Name:", info)
}
```

## Inheritence
Droplet supports single inheritence.

```rust
class Animal {
    name: str
    age: int

    new(name: str, age: int) {
        self.name = name
        self.age = age
    }

    fn speak() {
        println("Animal makes a sound")
    }

    fn getInfo() -> str {
        return self.name
    }
}

class Dog: Animal {
    breed: str

    new(name: str, age: int, breed: str) {
        self.name = name
        self.age = age
        self.breed = breed
    }

    fn speak() {
        println("Woof! I'm", self.name)
    }

    fn fetch() {
        println(self.name, "is fetching the ball!")
    }
}

fn main() {
        let dog = Dog("Max", 3, "Labrador")
        dog.speak()
        dog.fetch()
        print(dog.getInfo())
}
```

## Static
```rust
class MathHelper {
    static PI: float = 3.14159

    new() {
        // Empty constructor
    }

    static fn square(x: int) -> int {
        return x * x
    }
}

fn main() {
        let squared = MathHelper.square(5)
        println("5 squared:", squared)
        println()
}
```

## Private, Protected, Public
```rust
class BankAccount {
    pub name: str
    priv balance: float
    prot accountNumber: str

    new(name: str, initialBalance: float) {
        self.name = name
        self.balance = initialBalance
        self.accountNumber = "ACC123"
    }

    pub fn deposit(amount: float) {
        self.balance = self.balance + amount
        println("Deposited:", amount)
    }

    pub fn getBalance() -> float {
        return self.balance
    }

    priv fn calculateInterest() -> float {
        return self.balance * 0.05
    }
}

fn main() {
    println("=== Bank Account ===")
    let account = BankAccount("John", 1000.0)
    account.deposit(500.0)
    let balance = account.getBalance()
    println("Balance:", balance)
    println()
}
```

## Operator Overloading
```cpp
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

    fn magnitude() -> float {
        return (self.x * self.x + self.y * self.y)
    }

    fn print() {
        println("Vector(", self.x, ",", self.y, ")")
    }
}


fn main() {
    println("=== Operator Overloading ===")
    let v1 = Vector2D(3.0, 4.0)
    let v2 = Vector2D(1.0, 2.0)
    let v3 = v1 + v2
    v3.print()
    let v4 = v1 - v2
    v4.print()
    let v5 = v1 * 2.0
    v5.print()
}
```

## Sealed class
Sealed class can not be inherited from.
```kotlin
seal class FinalClass {
    value: int

    new(value: int) {
        self.value = value
    }
}

class m: FinalClass {} // will err

fn main() {}
```

## 