import { TasksService } from './../tasks.service';
import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  userId = input.required<string>();
  isVisible = input.required<boolean>();
  close = output<void>();
  taskTitle = signal('');
  taskSummary = signal('');
  taskDueDate = signal('');
  private tasksService = inject(TasksService);

  onSubmit() {
    const newTask: NewTask = {
      title: this.taskTitle(),
      summary: this.taskSummary(),
      dueDate: this.taskDueDate(),
    };
    this.tasksService.addTask(newTask, this.userId());
    this.taskTitle.set('');
    this.taskSummary.set('');
    this.taskDueDate.set('');
    this.close.emit();
  }
  onClose() {
    this.close.emit();
  }
}
