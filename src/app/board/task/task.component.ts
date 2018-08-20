import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  // coming from board.html
  @Input() task: Task;
  validDue = new Date();
  isOverdue: string;
  taskName: string;
  taskDue: Date;

  constructor(
    private taskService: TaskService,
    private elmentRef: ElementRef,
  ) { }

  ngOnInit() {
    this.isTaskOverdue();
    this.taskName = this.task.taskName;
    this.taskDue = this.task.due;
  }

  // Remove a Task
  onRemoveTask(taskId: number) {
    this.taskService.deleteTask(taskId);
  }

  // Display Details in a Modal
  showDetails(detailModal) {
    detailModal.open();
    this.elmentRef.nativeElement.parentElement.style['zIndex'] = 'auto';
  }

  // Update the Task
  onUpdate(detailModal) {
    this.taskName = this.task.taskName;
    this.taskDue = this.task.due;
    this.taskService.updateTask(this.task);
    detailModal.close();
  }

  // Add z-index=1 when the Details Modal is Closed
  addZindex() {
    this.elmentRef.nativeElement.parentElement.style['zIndex'] = '1';
  }

  // Add .task--overdue when the Task is Overdue
  isTaskOverdue() {
    const due = this.task.due;
    const now = new Date();
    if (due < now) {
      this.isOverdue = 'task--overdue';
    }
  }

}

