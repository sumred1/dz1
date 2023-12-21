import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.scss']
})
export class ToDoItemsComponent {
    user: User={name: 'Дима', age: 16, hobby: 'программирование'}
}
