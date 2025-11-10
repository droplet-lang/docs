---
sidebar_position: 2
---

# Maps

Maps in Droplet are **key-value collections**.  
They allow you to store and retrieve values using unique keys.

---

## ✏️ Creating a Map

```rust
let scores = {
    "Alice": 90,
    "Bob": 80,
    "Charlie": 85
}
````

---

## 🔑 Accessing Values

Use the key inside square brackets:

```rust
let aliceScore = scores["Alice"]
println("Alice's score:", aliceScore)
```

Output:

```
Alice's score: 90
```

---

## ✏️ Modifying Values

```rust
scores["Bob"] = 95
println("Updated scores:", scores)
```

Output:

```
Updated scores: {"Alice": 90, "Bob": 95, "Charlie": 85}
```

---

## ➕ Adding New Key-Value Pairs

```rust
scores["David"] = 88
println("Scores after adding David:", scores)
```

Output:

```
Scores after adding David: {"Alice": 90, "Bob": 95, "Charlie": 85, "David": 88}
```

---

## ❌ Removing a Key

Currently, to remove a key, create a new map without the key:

```rust
let {Alice, ...rest} = scores
println("Scores without Alice:", rest)
```

Output:

```
Scores without Alice: {"Bob": 95, "Charlie": 85, "David": 88}
```

---

## 🧠 Notes

* Map keys are usually strings.
* Values can be of any type.
* Maps are **unordered** — the order of keys is not guaranteed.
* Use maps when you need to associate values with named keys instead of numeric indexes.
