import { Injectable } from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task.model';
import { NewTask } from './new-task/new-task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = dummyTasks;

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: NewTask, userId: string): void {
    const id = Math.random().toString(36).substring(2, 15);
    this.tasks.push({ ...newTask, userId, id });
    this.saveTasksToLocalStorage();
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasksToLocalStorage();
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
