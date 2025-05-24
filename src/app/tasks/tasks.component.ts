import { Component, input, computed, signal, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  constructor(private taskService: TasksService) {}

  userName = input.required<string>();
  userId = input.required<string>();
  isNewTaskVisible = signal(false);

  get tasks() {
    return this.taskService.getUserTasks(this.userId());
  }

  onTaskComplete(taskId: string) {
    this.taskService.removeTask(taskId);
  }
  onNewTaskToggle(open: boolean) {
    this.isNewTaskVisible.set(open);
  }
}
