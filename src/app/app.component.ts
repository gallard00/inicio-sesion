import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent],
  template:  `
    <app-user> </app-user>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  city = 'Buenos Aires';
}
