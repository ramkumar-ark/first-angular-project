import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';
import { NewTaskComponent } from './tasks/new-task/new-task.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent,
    NewTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = signal(DUMMY_USERS);
  selectedUser = signal<User | null>(null);
  userName = computed(() => this.selectedUser()?.name || '');
  isNewTaskVisible = signal(false);

  onSelectUser(userId: string) {
    this.selectedUser.set(
      this.users().find((user) => user.id === userId) || null
    );
  }
  onNewTaskToggle(open: boolean) {
    this.isNewTaskVisible.set(open);
  }
}
