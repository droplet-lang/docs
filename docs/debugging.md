---
sidebar_position: 11
---

# Debugging

Droplet includes an **interactive debugger** that allows you to inspect program state, step through code, and analyze stack frames during execution.

The debugger is built directly into the **Droplet Virtual Machine (VM)** and is designed to resemble the experience of classic debuggers like GDB — but tailored for Droplet’s bytecode environment.

---

## Starting the Debugger

The debugger automatically attaches when your program is executed in **debug mode** or when a runtime breakpoint or error occurs.

When started, you’ll see:

```

Debugger started. Type 'help' for available commands.
(droplet-db)

````

You can now enter commands to control execution or inspect state.

---

## Execution Control Commands

| Command | Alias | Description |
|----------|--------|-------------|
| `step` | `s` | Step to the next **source line** (into function calls). |
| `next` | `n` | Step to the next **source line**, skipping over function calls. |
| `stepi` | `si` | Step one **instruction** (low-level). |
| `finish` | `fin` | Continue until the **current function returns**. |
| `continue` | `c` | Resume execution until a breakpoint or program end. |
| `quit` | `q` | Exit the debugger. |

> Press **Enter** with no input to repeat the last `step` or `next` command.

---

## Breakpoints

Breakpoints allow you to **pause execution** at specific lines in the source.

### Adding a Breakpoint

```bash
break <file>:<line>
````

Example:

```bash
break main.drp:42
```

You can also set a breakpoint in the **current file**:

```bash
break 10
```

### Listing Breakpoints

```bash
info breakpoints
```

### Enabling / Disabling / Removing

You can toggle breakpoints by their ID:

```bash
break 1         # Add a new breakpoint
disable 1       # Disable breakpoint
enable 1        # Enable breakpoint
delete 1        # Remove breakpoint
```

> The debugger automatically shows the breakpoint ID when it’s created.

---

## Inspecting Program State

### Printing Variables

Print any variable (local or global):

```bash
print <variable_name>
# or shorthand
p <variable_name>
```

Example:

```bash
p count
```

If the variable is uninitialized or not found, the debugger will notify you.

---

### Viewing Locals and Globals

```bash
info locals
info globals
```

Displays all **local** or **global** variables with their current values.

---

### Viewing the Stack

```bash
info stack
```

Shows the current **stack contents**, from top to bottom.

Example output:

```
Stack (top to bottom):
  [3] = "Droplet"
  [2] = 42
  [1] = true
```

---

## Backtrace (Call Stack)

You can inspect the **active call frames** using:

```bash
backtrace
# or shorthand
bt
# or
where
```

Example:

```
Call stack:
#0 main at main.drp:42
#1 foo at utils.drp:12
#2 <anonymous> at unknown location
```

This helps track **how execution reached the current point**.

---

## Viewing Source Context

To display surrounding lines of code:

```bash
list
```

By default, it shows 5 lines around the current line.

You can customize the number of context lines:

```bash
list 10
```

Example output:

```
   37 | print("Starting program")
=> 38 | result = compute(x, y)
   39 | print(result)
```

---

## Current Execution Location

At any paused point, Droplet shows where execution currently is:

```
At main.drp:38
  38 | result = compute(x, y)
```

You can also redisplay this anytime with:

```bash
info locals
```

or after each `step`, `next`, or breakpoint hit.