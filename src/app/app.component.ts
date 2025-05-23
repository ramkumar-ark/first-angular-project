import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

export type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedUser = signal<User | null>(null);

  onSelectUser(userId: string) {
    this.selectedUser.set(
      this.users().find((user) => user.id === userId) || null
    );
  }
}
