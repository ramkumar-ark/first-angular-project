import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true })
  userName!: string;
  @Input({ required: true })
  userAvatar!: string;

  get imagePath() {
    return `assets/users/${this.userAvatar}`;
  }

  onSelectUser() {}
}
