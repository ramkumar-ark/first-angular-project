import { Component, input, computed, signal, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userName = input.required<string>();
  userId = input.required<string>();
  completedTaskIds = signal<string[]>([]);
  createdTasks = signal<Task[]>([]);
  isNewTaskVisible = signal(false);

  tasks = computed(() =>
    [...dummyTasks, ...this.createdTasks()].filter(
      (task) =>
        task.userId === this.userId() &&
        !this.completedTaskIds().includes(task.id)
    )
  );

  onTaskComplete(taskId: string) {
    this.completedTaskIds.update((ids) => [...ids, taskId]);
  }
  onNewTaskToggle(open: boolean) {
    this.isNewTaskVisible.set(open);
  }
  onTaskCreated(newTask: NewTask) {
    const task = {
      id: Math.random().toString(36).substring(2, 15),
      userId: this.userId(),
      ...newTask,
    };
    this.createdTasks.update((tasks) => [...tasks, task]);
  }
}
