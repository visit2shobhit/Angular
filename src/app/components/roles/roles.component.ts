import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Component decorator with metadata
@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  // string number boolean array string object null
  firstName: string = "John";
  lastName: string = "Doe";
  city: string = "New York";
  inputType: string = "radio";
  buttonType: string = "button";
  showMeessage(message: string): void {
    alert(message);
  }
}
