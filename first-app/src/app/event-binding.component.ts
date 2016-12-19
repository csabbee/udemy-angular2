import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">
      Click me
    </button>
  `,
  styles: []
})
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter<string>();

  onClicked() {
    this.clicked.emit('It works!')
  }
}
