import { Component, OnInit, Input } from '@angular/core';
import { ToDoItem } from '../app.model';

@Component({
  selector: 'app-to-do-list-detail',
  templateUrl: './to-do-list-detail.component.html',
  styleUrls: ['./to-do-list-detail.component.scss']
})
export class ToDoListDetailComponent implements OnInit {
  @Input() listItem: ToDoItem;

  constructor() { }

  ngOnInit() {
  }

}
