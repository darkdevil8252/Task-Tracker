import fs from 'fs';
import path from 'path';

const FILE_PATH = path.resolve(process.cwd(), 'tasks.json');

export function readTasks() {
  try {
    if (!fs.existsSync(FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(FILE_PATH, 'utf8');
    if (!data.trim()) {
      return [];
    }
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading tasks.json:', error.message);
    return [];
  }
}

export function writeTasks(tasks) {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf8');
  } catch (error) {
    console.error('Error writing to tasks.json:', error.message);
  }
}
