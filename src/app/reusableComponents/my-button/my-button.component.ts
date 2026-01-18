import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() btnTetxt: string = '';
  @Input() btnClass: string = '';
  @Output() onBtnClciked = new EventEmitter<void>();
  onClick() {
    this.onBtnClciked.emit();
  }
}
