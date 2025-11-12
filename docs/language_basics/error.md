---
sidebar_position: 5
---

# Error Handling

Droplet provides a safe and explicit error handling mechanism inspired by Rust's `Result` type and Swift's error handling. Instead of exceptions, Droplet uses **error types** (marked with `!`) that force you to handle errors before using values.

## The Error Class

Droplet provides a built-in `Error` class that serves as the base for all errors:

```droplet
class Error {
    message: str

    new(message: str) {
        self.message = message
    }
}
```

You can extend `Error` to create custom error types:

```droplet
class FileNotFoundError extends Error {
    path: str

    new(path: str, message: str) {
        self.message = message
        self.path = path
    }
}

class NetworkError extends Error {
    code: int

    new(code: int, message: str) {
        self.message = message
        self.code = code
    }
}
```

## Error Types (`T!`)

When a function may return either a value or an error, mark its return type with `!`:

```droplet
fn divide(a: int, b: int) -> float! {
    if b == 0 {
        return Error("Division by zero")
    }
    return float(a) / float(b)
}
```

The `float!` type means "this function returns either a `float` or an `Error`".

## Checking for Errors

Before using a value from a function that returns `T!`, you **must** check if it's an error using the `is Error` operator:

```droplet
fn main() {
    let result = divide(10, 0)
    
    // ❌ This won't compile - must check for error first!
    // println(result)
    
    if result is Error {
        println("Error: " + result.message)
    } else {
        println("Result: " + str(result))
    }
}
```

### Pattern 1: If-Else

The most common pattern is to use if-else to handle both cases:

```droplet
let result = someFunction()

if result is Error {
    // In this block, result is type Error
    println("Something went wrong: " + result.message)
    // Handle the error
} else {
    // In this block, result is unwrapped (type T)
    println("Success: " + str(result))
}
```

### Pattern 2: Early Return (Guard Pattern)

If the error branch definitely returns or exits, the variable is automatically unwrapped after the if statement:

```droplet
fn processFile(filename: str) -> str {
    let contents = readFile(filename)  // Returns str!
    
    if contents is Error {
        println("Failed to read file: " + contents.message)
        exit(1)
    }
    
    // After the if block, 'contents' is automatically unwrapped to str
    return contents.toUpperCase()
}
```

This works because the compiler knows that if `contents` is an error, the program will exit, so beyond that point it **must** be a valid string.

### Pattern 3: Propagating Errors

You can return errors from your own functions:

```droplet
fn readAndParse(filename: str) -> int! {
    let contents = readFile(filename)  // Returns str!
    
    if contents is Error {
        // Propagate the error up
        return contents
    }
    
    let number = parseInt(contents)  // Returns int!
    
    if number is Error {
        return Error("Invalid number in file")
    }
    
    return number
}
```

## Methods Returning Errors

Class methods can also return error types:

```droplet
class Database {
    connected: bool

    new() {
        self.connected = false
    }

    fn connect(url: str) -> bool! {
        if !isValidUrl(url) {
            return Error("Invalid database URL")
        }
        
        // Try to connect...
        if !connectionSuccessful {
            return Error("Connection failed")
        }
        
        self.connected = true
        return true
    }
    
    fn query(sql: str) -> list[str]! {
        if !self.connected {
            return Error("Not connected to database")
        }
        
        // Execute query...
        return results
    }
}

fn main() {
    let db = Database()
    let connected = db.connect("localhost:5432")
    
    if connected is Error {
        println("Failed to connect: " + connected.message)
        exit(1)
    }
    
    let results = db.query("SELECT * FROM users")
    
    if results is Error {
        println("Query failed: " + results.message)
        exit(1)
    }
    
    // Use results safely
    for row in results {
        println(row)
    }
}
```

## Type Safety

The compiler enforces error checking at compile-time:

```droplet
fn riskyOperation() -> int! {
    // ...
}

fn main() {
    let value = riskyOperation()
    
    // ❌ Compile error: Cannot use a possibly failing value of type int! 
    //    without handling the Error first
    let doubled = value * 2
    
    // ✅ Correct: Check for error first
    if value is Error {
        println("Operation failed")
        exit(1)
    }
    
    let doubled = value * 2  // Now safe to use
}
```

## Custom Error Types

Create domain-specific errors by extending the `Error` class:

```droplet
class ValidationError extends Error {
    field: str

    new(field: str, message: str) {
        self.message = message
        self.field = field
    }
}

fn validateEmail(email: str) -> str! {
    if !email.contains("@") {
        return ValidationError("email", "Email must contain @")
    }
    
    if email.length < 5 {
        return ValidationError("email", "Email too short")
    }
    
    return email
}

fn main() {
    let email = validateEmail("bad")
    
    if email is Error {
        if email is ValidationError {
            println("Invalid " + email.field + ": " + email.message)
        } else {
            println("Error: " + email.message)
        }
        exit(1)
    }
    
    println("Valid email: " + email)
}
```