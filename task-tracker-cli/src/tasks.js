import { readTasks, writeTasks } from './storage.js';

export function addTask(description) {
  if (!description || description.trim() === '') {
    console.error('Error: Task description cannot be empty.');
    return;
  }

  const tasks = readTasks();
  const nextId = tasks.reduce((max, task) => (task.id > max ? task.id : max), 0) + 1;

  const newTask = {
    id: nextId,
    description: description.trim(),
    status: 'todo',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  writeTasks(tasks);
  console.log(`Task added successfully (ID: ${nextId})`);
  return nextId;
}

export function listTasks(statusFilter) {
  const tasks = readTasks();
  let filtered = tasks;

  if (statusFilter) {
    const validStatuses = ['todo', 'in-progress', 'done'];
    if (!validStatuses.includes(statusFilter)) {
      console.error(`Error: Invalid status filter "${statusFilter}". Use 'todo', 'in-progress', or 'done'.`);
      return;
    }
    filtered = tasks.filter(t => t.status === statusFilter);
  }

  if (filtered.length === 0) {
    console.log('No tasks found.');
    return;
  }

  filtered.forEach(task => {
    console.log(`[${task.id}] ${task.description} (${task.status})`);
  });
}

export function doneTask(idStr) {
  const id = parseInt(idStr, 10);
  if (isNaN(id)) {
    console.error('Error: Task ID must be a number.');
    return;
  }

  const tasks = readTasks();
  const task = tasks.find(t => t.id === id);

  if (!task) {
    console.error(`Error: Task with ID ${id} not found.`);
    return;
  }

  task.status = 'done';
  task.updatedAt = new Date().toISOString();
  writeTasks(tasks);
  console.log(`Task ${id} marked as done.`);
}

export function removeTask(idStr) {
  const id = parseInt(idStr, 10);
  if (isNaN(id)) {
    console.error('Error: Task ID must be a number.');
    return;
  }

  const tasks = readTasks();
  const taskIndex = tasks.findIndex(t => t.id === id);

  if (taskIndex === -1) {
    console.error(`Error: Task with ID ${id} not found.`);
    return;
  }

  tasks.splice(taskIndex, 1);
  writeTasks(tasks);
  console.log(`Task ${id} removed successfully.`);
}
