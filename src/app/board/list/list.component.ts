import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Task } from '../task/task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title: string;
  @Input() tasks: Task[];
  @Input() hasAddButton = false;
  @Input() acceptingStatus: boolean;
  arrow = 'arrow_drop_down';
  sortCondition = 'dueAsc';

  constructor(
    private taskService: TaskService,
  ) { }

  ngOnInit() {
  }

  // Update the Completion Status
  onUpdateStatus(dropData) {
    const taskId = dropData.dropData.split(' ')[0];
    const taskStatus = dropData.dropData.split(' ')[1];

    if (this.acceptingStatus.toString() === taskStatus) {
      this.taskService.updateStatus(+taskId);
    }
  }

  orderByDate(condition, event) {
    if (event === undefined || (event !== undefined && event.key === 'Enter')) {
      if (condition === 'dueAsc') {
        this.tasks.sort(
          (t1, t2) => this.byDate(t1, t2)
        );
        this.arrow = 'arrow_drop_up';
        this.sortCondition = 'dueDesc';
      } else {
        this.tasks.sort(
          (t1, t2) => this.byDate(t2, t1)
        );
        this.arrow = 'arrow_drop_down';
        this.sortCondition = 'dueAsc';
      }
    }
  }

  private byDate(item1, item2) {
    if (item1.due > item2.due) {
      return 1;
    }
    if (item1.due < item2.due) {
      return -1;
    }
    return 0;
  }

}
