import { Component, OnInit } from '@angular/core';
import { Task } from './task/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  todoTasks: Task[];
  completedTasks: Task[];
  task: Task;

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    this.getTasks();
  }

  // Read All Tasks
  getTasks() {
    this.taskService
    .getAllTasks()
    .subscribe(data => {
      this.todoTasks = data.filter(q => q.status === false);
      this.completedTasks = data.filter(q => q.status === true);
    });
  }

}


