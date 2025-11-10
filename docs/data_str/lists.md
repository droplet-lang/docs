---
sidebar_position: 1
---

# Lists

Lists in Droplet are **ordered collections** of elements.  
They are mutable, can store multiple types, and are indexed starting at `0`.

---

## ✏️ Creating a List

```rust
let numbers = [1, 2, 3, 4, 5]
let names = ["Alice", "Bob", "Charlie"]
````

---

## 🔢 Accessing Elements

Use square brackets `[]` to access elements by index:

```rust
let first = numbers[0]
println("First number:", first)
```

Output:

```
First number: 1
```

---

## ✏️ Modifying Elements

Lists are mutable:

```rust
numbers[2] = 99
println("Modified numbers:", numbers)
```

Output:

```
Modified numbers: [1, 2, 99, 4, 5]
```

---

## ➕ Adding and Removing Elements

Currently, you can use concatenation to add elements:

```rust
let newNumbers = numbers + [6, 7]
println("Extended list:", newNumbers)
```

Removing elements requires creating a new list excluding the items you want to remove.

---

## 🧩 Empty List

```rust
let emptyList = []
println("Empty list:", emptyList)
```

Output:

```
Empty list: []
```

---

## 🧠 Notes

* Lists are **zero-indexed**.
* Elements can be of any type, but mixing types is possible only for learning purposes — it may make code harder to read.
* Use lists to store sequences of items for iteration and manipulation.
