---
sidebar_position: 4
---

# Access Modifiers

Droplet supports **access modifiers** to control visibility of class members.  
There are three types: `pub`, `priv`, and `prot`.

---

## ✏️ Public Members (`pub`)

Public members can be accessed **from anywhere**:

```rust
class BankAccount {
    pub name: str

    new(name: str) {
        self.name = name
    }
}

fn main() {
    let account = BankAccount("John")
    println(account.name)  // Accessible
}
````

---

## 🔒 Private Members (`priv`)

Private members can only be accessed **inside the class**:

```rust
class BankAccount {
    priv balance: float

    new(balance: float) {
        self.balance = balance
    }

    pub fn deposit(amount: float) {
        self.balance = self.balance + amount
    }

    pub fn getBalance() -> float {
        return self.balance
    }
}

fn main() {
    let account = BankAccount(1000.0)
    // println(account.balance)  // ❌ Error: private member
    account.deposit(500.0)
    println("Balance:", account.getBalance())
}
```

Output:

```
Balance: 1500.0
```

---

## 🛡 Protected Members (`prot`)

Protected members can be accessed **within the class and its subclasses**:

```rust
class BankAccount {
    prot accountNumber: str

    new(accountNumber: str) {
        self.accountNumber = accountNumber
    }
}

class SavingsAccount: BankAccount {
    new(accountNumber: str) {
        self.accountNumber = accountNumber
    }

    fn showAccount() {
        println("Account Number:", self.accountNumber) // Accessible
    }
}
```

---

## 🧠 Notes

* `pub` → accessible everywhere
* `priv` → accessible only inside the class
* `prot` → accessible inside the class and subclasses
* Use access modifiers to **encapsulate data** and control how objects interact.
