import { Component, OnInit } from '@angular/core';
import { ToDoItem } from '../app.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  listItems: ToDoItem[] = [
    { title: 'get up', blocked: false },
    { title: 'stand up', blocked: false },
    { title: 'don\'t give up the fight', blocked: false },
    { title: 'save the world', blocked: false },
    { title: 'do something else', blocked: false },
  ];

  constructor() { }

  ngOnInit() {
  }

  onEnter(event: KeyboardEvent) {
    this.listItems.push({title: (event.target as HTMLInputElement).value + '', blocked: false});
    (event.target as HTMLInputElement).value = '';
  }

  OnDeleteClick(event: any, localItem) {
    const num = this.listItems.findIndex(item => item.title === localItem);
    this.listItems.splice(num, 1);
  }
}
