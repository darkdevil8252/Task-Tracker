import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { readTasks } from '../src/storage.js';
import { addTask, listTasks, doneTask, removeTask } from '../src/tasks.js';

const FILE_PATH = path.resolve(process.cwd(), 'tasks.json');

// Helper to clean up tasks.json
function cleanUp() {
  if (fs.existsSync(FILE_PATH)) {
    fs.unlinkSync(FILE_PATH);
  }
}

try {
  console.log('Running test suite...');
  cleanUp();

  // Test 1: Add a task
  console.log('\n--- Test 1: Add task ---');
  const id1 = addTask('Buy groceries');
  assert.strictEqual(id1, 1, 'First task ID should be 1');

  const tasksAfterAdd = readTasks();
  assert.strictEqual(tasksAfterAdd.length, 1);
  assert.strictEqual(tasksAfterAdd[0].description, 'Buy groceries');
  assert.strictEqual(tasksAfterAdd[0].status, 'todo');

  const id2 = addTask('Clean the room');
  assert.strictEqual(id2, 2, 'Second task ID should be 2');
  assert.strictEqual(readTasks().length, 2);

  // Test 2: Complete a task
  console.log('\n--- Test 2: Complete task ---');
  doneTask('1');
  const tasksAfterComplete = readTasks();
  const task1 = tasksAfterComplete.find(t => t.id === 1);
  assert.strictEqual(task1.status, 'done', 'Task 1 status should be "done"');

  // Test 3: List tasks (visual check, but also verification)
  console.log('\n--- Test 3: List tasks ---');
  listTasks();
  console.log('Listing completed tasks:');
  listTasks('done');

  // Test 4: Remove a task
  console.log('\n--- Test 4: Remove task ---');
  removeTask('1');
  const tasksAfterRemove = readTasks();
  assert.strictEqual(tasksAfterRemove.length, 1);
  assert.strictEqual(tasksAfterRemove.find(t => t.id === 1), undefined, 'Task 1 should be removed');

  console.log('\nAll programmatic tests passed successfully!');
} catch (error) {
  console.error('\nTest failed:', error);
  process.exit(1);
} finally {
  cleanUp();
}
