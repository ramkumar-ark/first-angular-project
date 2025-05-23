import { Component, computed, input, output } from '@angular/core';

export type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  user = input.required<User>();

  userSelected = output<string>();

  imagePath = computed(() => `assets/users/${this.user().avatar}`);

  onSelectUser() {
    this.userSelected.emit(this.user().id);
  }
}
