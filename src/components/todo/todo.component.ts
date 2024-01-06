import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/model';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent implements OnInit {
  constructor(private todoService:TodoService){}

  todos:Todo[] = []

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.todoService.getAll().subscribe(res=>{
      this.todos=res["todos"]
    })
  }

}
