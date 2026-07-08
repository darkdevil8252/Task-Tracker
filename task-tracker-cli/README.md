# Task Tracker CLI

A minimalist Node.js command-line application to create, list, and manage to-do tasks, persisted locally via a single JSON file.

---

## Project Overview

**Task Tracker CLI** is a lightweight, offline command-line tool that lets you manage a to-do list entirely from your terminal. Instead of opening a task-management application or web interface, you run short commands like `task-tracker add`, `task-tracker list`, and `task-tracker done` to track your work.

The project was built to practice backend fundamentals without a framework handling the structure: parsing command-line arguments, handling file read/write operations, and organizing a small Node.js project into clean, separated modules (storage logic, core tasks logic, and CLI arguments configuration).

### Key Characteristics
- **Fully Offline:** No servers, no databases, and no user account configurations are required. All tasks are saved to a single local JSON file.
- **Zero Runtime Dependencies:** Relies strictly on native Node.js core modules for file persistence, with Commander.js handling user argument parsing.
- **Instant Terminal Feedback:** Every command outputs a clear confirmation message so you always know what task states have changed.
- **Readable Codebase:** The entire application is implemented in under 150 lines of code, making it easy to review and understand.

---

## Tech Stack
- **Runtime:** Node.js
- **CLI Parsing:** Commander.js
- **Storage:** Native Node.js `fs` module (persisting tasks as formatted JSON)

---

## Installation

You can install the tool globally on your system directly from the local directory:

```bash
# From the project directory, run:
npm install -g .
```

Once installed, the CLI tool is globally available via the `task-tracker` command.

---

## Usage Guide

### 1. Add a Task
Add a new task to your list. The CLI generates a sequential, unique ID automatically.
```bash
task-tracker add "Buy groceries"
# Output: Task added successfully (ID: 1)
```

### 2. List Tasks
Display tasks. You can optionally filter them by status (`todo`, `in-progress`, `done`).
```bash
# List all tasks
task-tracker list

# List only completed tasks
task-tracker list done
```

### 3. Mark a Task as Done
Mark a specific task as completed using its ID.
```bash
task-tracker done 1
# Output: Task 1 marked as done.
```

### 4. Remove a Task
Delete a task from the list using its ID.
```bash
task-tracker remove 1
# Output: Task 1 removed successfully.
```

---

## Demonstrated Skills
- **Node.js File I/O:** Reading, parsing, writing, and updating local JSON files.
- **Modular Software Design:** Clean directory separation between configuration (`package.json`), entry point (`bin/index.js`), and core modules (`src/`).
- **CLI UX Design:** Writing logical, standard commands, arguments, and confirmations.
