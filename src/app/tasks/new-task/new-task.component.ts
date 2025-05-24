import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from './new-task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  isVisible = input.required<boolean>();
  close = output<void>();
  create = output<NewTask>();
  taskTitle = signal('');
  taskSummary = signal('');
  taskDueDate = signal<''>('');
  onSubmit() {
    const newTask: NewTask = {
      title: this.taskTitle(),
      summary: this.taskSummary(),
      dueDate: this.taskDueDate(),
    };
    this.create.emit(newTask);
    this.taskTitle.set('');
    this.taskSummary.set('');
    this.taskDueDate.set('');
    this.close.emit();
  }
  onClose() {
    this.close.emit();
  }
}
