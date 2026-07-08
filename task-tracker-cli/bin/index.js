#!/usr/bin/env node

import { Command } from 'commander';
import { addTask, listTasks, doneTask, removeTask } from '../src/tasks.js';

const program = new Command();

program
  .name('task-tracker')
  .description('A simple command-line interface for managing a to-do list')
  .version('1.0.0');

program
  .command('add')
  .description('Add a new task')
  .argument('<description>', 'task description')
  .action((description) => {
    addTask(description);
  });

program
  .command('list')
  .description('List tasks, optionally filtered by status')
  .argument('[status]', 'filter tasks by status (todo, in-progress, done)')
  .action((status) => {
    listTasks(status);
  });

program
  .command('done')
  .description('Mark a task as done')
  .argument('<id>', 'task ID')
  .action((id) => {
    doneTask(id);
  });

program
  .command('remove')
  .description('Remove a task')
  .argument('<id>', 'task ID')
  .action((id) => {
    removeTask(id);
  });

program.parse(process.argv);
