---
sidebar_position: 6
---

# Writing Native Libraries

Droplet allows extending the language by writing **native functions** in C/C++.  
These functions can be registered in the VM and called from Droplet code.

---

## 🔹 Creating a Native Function

Native functions have this signature:

```cpp
void native_function_name(VM& vm, const uint8_t argc);
````

* `vm` → Reference to the Droplet VM instance
* `argc` → Number of arguments passed from Droplet

---

## ✏️ Example: Custom Native Functions

```cpp
#include "VM.h"
#include <iostream>

void native_print(VM& vm, const uint8_t argc) {
    for (int i = 0; i < argc; i++) {
        std::cout << vm.popValue() << " ";
    }
    std::cout << std::endl;
}

void native_len(VM& vm, const uint8_t argc) {
    auto val = vm.popValue();
    vm.pushValue(val.size());  // Push length back to stack
}

// Register functions in VM
inline void register_native_functions(VM& vm) {
    vm.register_native("print", native_print);
    vm.register_native("len", native_len);
}
```

---

## 🔄 Using Native Functions in Droplet

```rust
fn main() {
    print("Hello from native function!")
    println("Length of list:", len([1,2,3,4]))
}
```

Output:

```
Hello from native function!
Length of list: 4
```

---

## 🧠 Notes

* Native functions are **directly executed by the VM**.
* They provide **access to system libraries** or optimized operations.
* Arguments are managed on the VM **stack**, and return values must be pushed back.
* This mechanism allows **learning how languages interface with low-level code**.
