import { Injectable } from '@angular/core';
import { Task } from './board/task/task.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  // pre-defined tasks for demonstration purpose
  private tasks: Task[] = [
    new Task(1, 'Angular Todo App', false, 'Coding challenge from NorthOne', new Date('2018/08/20 11:00:00')),
    new Task(2, 'Highlighter App', false, null, new Date('2018/08/30 21:00:00')),
    new Task(3, 'Meeting at Humber', true, 'With Humber HR @Cave', new Date('2018/08/01 10:00:00')),
  ];

  constructor() { }

  private taskBehaivior = new BehaviorSubject<Task[]>([]);
  tasksObservable = this.taskBehaivior.asObservable();

  // Read
  // return Task[]
  getAllTasks(): Observable <Task[]> {
    this.taskBehaivior.next(this.tasks);
    return this.tasksObservable;
  }

  // Create
  // @param: Task
  // void
  addTask(newTask: Task) {
    newTask.id = this.tasks.length + 1;
    this.tasks.push(newTask);
    this.taskBehaivior.next(this.tasks);
  }

  // Update
  // @param: Task
  // void
  updateTask(updatedTask: Task) {
    const taskIndex = this.tasks.findIndex(i => i.id === updatedTask.id);
    this.tasks[taskIndex] = updatedTask;
    this.taskBehaivior.next(this.tasks);
  }

  // @param: id
  // void
  updateStatus(taskId: number) {
    const task = this.tasks.find(i => i.id === taskId);
    task.status = !task.status;
    this.taskBehaivior.next(this.tasks);
  }

  // Delete
  // @param: id
  // void
  deleteTask(taskId: number) {
    const taskIndex = this.tasks.findIndex(i => i.id === taskId);
    this.tasks.splice(taskIndex, 1);
    this.taskBehaivior.next(this.tasks);
  }
}


