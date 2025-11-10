---
sidebar_position: 2
---

# Installation

This guide walks you through installing the Droplet compiler and virtual machine on your system.  
Since Droplet is a hobby project and still under development, installation may vary slightly depending on whether you build it from source or use prebuilt binaries.

---

## 🧰 Prerequisites

Before installing Droplet, make sure you have the following tools:

| Tool | Purpose |
|------|----------|
| **C++ Compiler (C++17 or higher)** | Required if building from source. |
| **CMake (3.15 or higher)** | Required if building from source. |
| **Git** | Required if building from source. |
| **VS Code (optional)** | Recommended for editing Droplet files and using the Droplet extension. |

---

## 📦 Option 1: Download Prebuilt Binaries

If you prefer not to build Droplet manually, you can download prebuilt executables from:

👉 [Droplet Releases on GitHub](https://github.com/droplet-lang/lang/releases)

Available files include:

| File | Description |
|------|--------------|
| `droplet` | The Droplet compiler (includes VM). |
| `drip` | Package manager for Droplet projects. |
| `droplet-vscode` | VS Code extension for Droplet syntax and outline support. |

After downloading, you can optionally add them to your PATH for easier access.

---

## 🧩 Option 2: Build from Source

If you want to explore or modify Droplet, you can build it manually.

### 1. Clone the Repository

```bash
git clone https://github.com/droplet-lang/lang.git
cd lang
````

### 2. Configure the Project

```bash
mkdir build
cd build
cmake ..
```

### 3. Build the Compiler and VM

```bash
cmake --build .
```

Executables `droplet` and `dlvm` will be available in the `build` folder.

---

## 🧪 Verifying the Installation

```bash
./droplet --version
```

Expected output:

```
Droplet Compiler v0.1.0
```

---

## 💡 Optional: Add Droplet to PATH

**Linux/macOS:**

```bash
export PATH=$PATH:/path/to/droplet/build
```

**Windows (PowerShell):**

```powershell
setx PATH "$($env:PATH);C:\path\to\droplet\build"
```

---

## 🧠 Next Steps

Once installed, you’re ready to write your first program: [Hello World](./hello-world.md)
