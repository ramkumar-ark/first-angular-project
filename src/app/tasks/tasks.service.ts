import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task.model';

export class TasksService {
  private tasks: Task[] = dummyTasks;

  getUserTasks(userId: string): Task[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(newTask: Task): void {
    this.tasks.push(newTask);
  }

  removeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
