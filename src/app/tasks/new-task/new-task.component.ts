import { Component, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  isVisible = input.required<boolean>();
  close = output<void>();
  taskTitle = signal('');
  taskSummary = signal('');
  taskDueDate = signal<''>('');
  onSubmit(formData: any) {
    // Logic to handle form submission for creating a new task
    console.log('New task submitted:', formData);
  }
  onClose() {
    this.close.emit();
  }
}
