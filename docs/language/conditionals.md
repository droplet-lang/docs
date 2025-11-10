---
sidebar_position: 2
---

# Conditionals
Droplet only supports if else.

```rust
if x > 0 {
    println(x, "is positive")
} else if x < 0 {
    println(x, "is negative")
} else {
    println(x, "is zero")
}
```