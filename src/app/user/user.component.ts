import { Component, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();
  isSelected = input.required<boolean>();

  userSelected = output<string>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.userSelected.emit(this.user().id);
  }
}
