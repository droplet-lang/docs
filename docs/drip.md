---
sidebar_position: 10
---

# Package Manager (Drip)

Drip is the **package manager** for Droplet.  
It helps manage external libraries, modules, and dependencies in your projects.

---

## 🔹 Installing Drip

Drip is included in the Droplet release binaries.  
You can download it from:

[https://github.com/droplet-lang/lang/releases](https://github.com/droplet-lang/lang/releases)

---

## 🔄 Common Commands

| Command                  | Description                                   |
|---------------------------|-----------------------------------------------|
| `drip init [project_name]` | Create a new Droplet project                 |
| `drip install [git-repo]`  | Install a module from a Git repository       |
| `drip remove [git-repo]`   | Remove a module from your project            |

---

## ✏️ Start a New Project

```bash
drip init MyProject
````

This will create a **project folder** with basic structure ready for coding.

---

## 🔄 Installing Modules

```bash
drip install https://github.com/username/module-repo
```

This downloads and sets up the module for use in your project.

---

## ❌ Removing Modules

```bash
drip remove https://github.com/username/module-repo
```

Removes the module from your project and updates dependencies.

---

## 🧠 Notes

* Drip relies on **Git repositories** to fetch modules.
* Installed modules can be **imported in your Droplet code** using standard import syntax.
* Drip helps organize project dependencies and keeps your project modular.
