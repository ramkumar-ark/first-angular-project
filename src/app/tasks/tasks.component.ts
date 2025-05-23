import { Component, input, computed } from '@angular/core';
import { Task, TaskComponent } from './task/task.component';
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
  tasks = computed(() =>
    dummyTasks.filter((task) => task.userId === this.userId())
  );
}
