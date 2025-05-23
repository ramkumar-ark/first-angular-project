import { Component, input, computed, signal } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  userName = input.required<string>();
  userId = input.required<string>();
  completedTaskIds = signal<string[]>([]);
  tasks = computed(() =>
    dummyTasks.filter(
      (task) =>
        task.userId === this.userId() &&
        !this.completedTaskIds().includes(task.id)
    )
  );

  onTaskComplete(taskId: string) {
    this.completedTaskIds.update((ids) => [...ids, taskId]);
  }
}
