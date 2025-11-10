---
sidebar_position: 3
---

# Loops
## While loop
```rust
let count = 0
while count < 5 {
    println("Count:", count)
    count = count + 1
}
```

## for..in Loop
```rust
let items = [10, 20, 30, 40, 50]
for item in items {
    println("Item:", item)
}
```

# loop Loop
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