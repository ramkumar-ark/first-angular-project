import { Component, input, output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../ui/card/card.component';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<string>();

  onCompleted() {
    this.complete.emit(this.task().id);
  }
}
