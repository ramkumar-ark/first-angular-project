import { Component, computed, input, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName = input.required<string>();
  userAvatar = input.required<string>();

  imagePath = computed(() => `assets/users/${this.userAvatar()}`);

  onSelectUser() {}
}
