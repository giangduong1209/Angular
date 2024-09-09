import { inject, Injectable, signal } from '@angular/core';
import { Task, TaskStatus } from './task.model';
import { LoggingService } from '../logging.service';

// @Injectable({
//   providedIn: 'root',
// })
export class TasksService {
  private taskData = signal<Task[]>([]);
  private loggingService = inject(LoggingService);

  allTasks = this.taskData.asReadonly();

  onAdd(taskData: { title: string; description: string }) {
    const newTask: Task = {
      ...taskData,
      id: Math.random().toString(),
      status: 'OPEN',
    };
    this.taskData.update((oldTask) => [...oldTask, newTask]);
    this.loggingService.log('ADDED TASK WITH TITLE ' + taskData.title);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.taskData.update((oldTask) => {
      return oldTask.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
    });
    this.loggingService.log('CHANGE TASK STATUS TO ' + newStatus);
  }
}
