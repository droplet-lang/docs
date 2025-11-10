---
sidebar_position: 3
---

# Loops

Droplet provides **looping constructs** to repeat a block of code.  
Currently, it supports `while`, `for..in`, and `loop` loops.

---

## 🔁 While Loop

The `while` loop executes as long as the condition is true:

```rust
let count = 0
while count < 5 {
    println("Count:", count)
    count = count + 1
}
````

Output:

```
Count: 0
Count: 1
Count: 2
Count: 3
Count: 4
```

---

## 🔄 For..in Loop

Iterate over lists using `for..in`:

```rust
let items = [10, 20, 30, 40, 50]

for item in items {
    println("Item:", item)
}
```

Output:

```
Item: 10
Item: 20
Item: 30
Item: 40
Item: 50
```

---

## 🔁 Infinite Loop with `loop`

The `loop` statement repeats indefinitely until a `break` is encountered:

```rust
let i = 0
loop {
    i = i + 1

    if i == 3 {
        println("Skipping 3")
        continue
    }

    if i > 5 {
        println("Breaking at", i)
        break
    }

    println("i =", i)
}
```

Output:

```
i = 1
i = 2
Skipping 3
i = 4
i = 5
Breaking at 6
```

---

## 🧠 Notes

* Use `break` to exit a loop.
* Use `continue` to skip the current iteration.
* Loops can be nested like in most other programming languages.
