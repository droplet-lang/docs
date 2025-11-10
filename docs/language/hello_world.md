---
sidebar_position: 1
---

# Hello World

Its very easy to create a Hello World program in Droplet.

```rust
fn main() {
    println("Hello World")
}
```
Droplet VM always execute the program from `main` function.
Save the program as `hello.drop`.
To compile above program,
```
droplet compile hello.drop
```

This creates a `hello.dbc` file which is the bytecode file. We can now run this bytecode easily using the droplet VM.
```
droplet run hello.dbc
```

This will produce:
```
Hello World
```