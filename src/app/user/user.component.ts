import { Component, computed, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userId = input.required<string>();
  userName = input.required<string>();
  userAvatar = input.required<string>();

  userSelected = output<string>();

  imagePath = computed(() => `assets/users/${this.userAvatar()}`);

  onSelectUser() {
    this.userSelected.emit(this.userId());
  }
}
