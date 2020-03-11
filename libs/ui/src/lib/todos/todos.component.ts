import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '@bauman/data';

@Component({
  selector: 'bauman-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];

  constructor() {}

  ngOnInit(): void {}
}
