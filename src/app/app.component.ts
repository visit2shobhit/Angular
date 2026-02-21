import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { RolesComponent } from './components/roles/roles.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'smaple-angular-proect';
}
