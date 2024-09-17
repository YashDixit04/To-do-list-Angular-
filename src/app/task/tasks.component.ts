import { Component, Input } from '@angular/core';
import { TasksComponent } from "./tasks/task.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { type NewTaskData } from './tasks/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TasksComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TaskComponent {
  @Input({ required: true }) userId!: string
  @Input({ required: true }) name?: string
  // @Input() name: string | undefined;;

  isAddingTask = false;
  // private tasksService: TasksService;

  constructor(private tasksService: TasksService){
  //  this.tasksService = tasksService;
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

}
