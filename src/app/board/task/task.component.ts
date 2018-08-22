import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Task } from './task.model';
import { TaskService } from '../../task.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  updateTaskForm: FormGroup;

  constructor(
    private taskService: TaskService,
    private elmentRef: ElementRef,
  ) { }

  ngOnInit() {
    this.isTaskOverdue();
    this.updateTaskForm = new FormGroup({
      nameInput: new FormControl(this.task.taskName),
      descriptionInput: new FormControl(this.task.taskDescription),
      dueInput: new FormControl(this.task.due)
    });
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
    const updatedTask = new Task (
      this.task.id,
      this.updateTaskForm.value.nameInput,
      this.task.status,
      this.updateTaskForm.value.descriptionInput,
      this.updateTaskForm.value.dueInput
    );
    this.taskService.updateTask(updatedTask);
    detailModal.close();
  }

  // When the Details Modal is Closed
  onDetailsClosed() {
    // Add z-index=1 when the Details Modal is Closed
    this.elmentRef.nativeElement.parentElement.style['zIndex'] = '1';

    // Reset the Values
    this.updateTaskForm = new FormGroup({
      nameInput: new FormControl(this.task.taskName),
      descriptionInput: new FormControl(this.task.taskDescription),
      dueInput: new FormControl(this.task.due)
    });
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

