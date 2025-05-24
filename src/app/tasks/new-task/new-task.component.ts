import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  isVisible = input.required<boolean>();
  close = output<void>();
  onSubmit(formData: any) {
    // Logic to handle form submission for creating a new task
    console.log('New task submitted:', formData);
  }
  onClose() {
    this.close.emit();
  }
}
