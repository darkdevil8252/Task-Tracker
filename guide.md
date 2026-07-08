# Task Tracker CLI User Guide

Welcome to the **Task Tracker CLI**! This is a minimalist, local-first command-line application that allows you to create, list, and manage your tasks directly from your terminal.

---

## 1. Overview

Task Tracker CLI is built to help you manage your to-do lists quickly without leaving your terminal environment. It has the following key characteristics:
- **Offline & Local:** No server setup, external database, or user registration required. All data is stored locally.
- **Zero Runtime Dependencies:** Operates strictly on Node.js native core modules, with `commander` for CLI argument parsing.
- **Project-Specific Lists:** Tasks are persisted inside a `tasks.json` file in the directory where the command is executed.

---

## 2. Installation & Setup

Since the tool is written in Node.js, ensure you have the Node.js runtime installed.

### Step 1: Verify Node.js Installation
Open your terminal (PowerShell, Command Prompt, or terminal) and check your Node version:
```bash
node -v
```
*(Requires Node.js v18.0.0 or higher.)*

### Step 2: Navigate to Project Directory
Make sure you are in the root of the project where `package.json` is located.

### Step 3: Install Globally
Install the package globally on your system:
```bash
npm install -g .
```

> [!WARNING]  
> **Windows Users:** If you receive a permission or execution policy error, run your PowerShell/Command Prompt as Administrator.  
> **macOS/Linux Users:** If you get a permission error, prefix the command with `sudo`: `sudo npm install -g .`

---

## 3. Command Reference

Once installed, use the global command `task-tracker` followed by any subcommand:

| Command | Arguments | Description | Example & Output |
| :--- | :--- | :--- | :--- |
| `add` | `<description>` | Adds a new task with a status of `todo`. Assigns an incrementing ID. | `task-tracker add "Buy groceries"`<br>*Output:* `Task added successfully (ID: 1)` |
| `list` | `[status]` | Lists all saved tasks. Filter by: `todo`, `in-progress`, or `done`. | `task-tracker list todo`<br>*Output:* `[1] Buy groceries (todo)` |
| `done` | `<id>` | Marks a task as completed (`done`) using its unique ID. | `task-tracker done 1`<br>*Output:* `Task 1 marked as done.` |
| `remove` | `<id>` | Deletes the task from your local list permanently. | `task-tracker remove 1`<br>*Output:* `Task 1 removed successfully.` |

---

## 4. Local Storage (tasks.json)

The application automatically creates and updates a `tasks.json` file in your **current working directory**. 

### JSON Schema
Each task is represented as follows:
```json
[
  {
    "id": 1,
    "description": "Buy groceries",
    "status": "todo",
    "createdAt": "2026-07-08T14:00:00.000Z",
    "updatedAt": "2026-07-08T14:00:00.000Z"
  }
]
```

> [!NOTE]  
> Because the data is stored in the current working directory, running `task-tracker` commands in different folders will create and manage distinct task lists (`tasks.json`) for each folder.

---

## 5. Troubleshooting & FAQ

#### Q: Command not found: `task-tracker`
Make sure you ran the global installation step (`npm install -g .`). If you did, ensure that the path to your global `npm` directory is included in your system's `PATH` environment variable. Alternatively, you can run the tool locally from the project directory:
```bash
node bin/index.js list
```

#### Q: Can I edit the `tasks.json` file manually?
Yes. You can open and edit `tasks.json` in any text editor. However, keep the formatting as valid JSON. If the file contains syntax errors (like missing commas or unbalanced quotes), the CLI tool may fail to read it or reset the tasks.

#### Q: How can I change a task's status back to `todo`?
Currently, the CLI supports marking tasks as `done`. To reset a task status to `todo` or `in-progress`, open the `tasks.json` file in a text editor and change the `"status"` property directly.
