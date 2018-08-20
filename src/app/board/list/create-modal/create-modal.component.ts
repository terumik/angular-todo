import { Component, OnInit } from '@angular/core';
import { Task } from '../../task/task.model';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss']
})
export class CreateModalComponent implements OnInit {

  task: Task;
  validDue = new Date();

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
    // Initialize a new task
    this.task = new Task(null, '', false, '', null);
  }

  // Open a Modal Window for Adding a New Task
  onOpenModal(addTaskModal) {
    this.task = new Task(null, '', false, '', null);
    addTaskModal.open();
  }

  // Add a New Task
  onSubmit(addTaskModal) {
    this.taskService.addTask(this.task);
    addTaskModal.close();
  }

}
