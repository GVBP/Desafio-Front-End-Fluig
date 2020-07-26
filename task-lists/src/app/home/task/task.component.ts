import { Component, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { TaskService } from '../../_services/task.service';

@Component({
    selector: 'app-task',
    templateUrl: 'task.component.html'
})
export class TaskComponent {

    public allTasks$: Observable<any[]>;
    public deleteModalRef: BsModalRef;
    @ViewChild('deleteModal') deleteModal;
    public selectedTask;

    constructor(
        private bsModalService: BsModalService,
        private taskService: TaskService
    ) { }

    ngOnInit() {
        this.allTasks$ = this.taskService.getAllTasks();
    }

    deleteTask(task) {
        console.log(task);
        this.selectedTask = task;
        this.deleteModalRef = this.bsModalService.show(this.deleteModal, { class: 'modal-sm' });
    }

    onConfirmDelete() {
        this.taskService.deleteTask(this.selectedTask.id).subscribe(
            sucess => {
                this.deleteModalRef.hide();
                location.reload(true);
            },
            error => console.log(error)
        )
    }

    onDeclineDelete() {
        this.deleteModalRef.hide();
    }

    updateTask(task: any, inputTask: HTMLInputElement) {
        inputTask.disabled = !inputTask.disabled;
        task.description = inputTask.value;
        this.taskService.updateTask(task).subscribe(
            sucess => console.log(sucess),
            error => console.log(error)
        )
    }

    changeStatusTask(task: any, checkedValue: boolean) {
        task.statusTask = checkedValue;
        this.taskService.updateTask(task).subscribe(
            sucess => console.log(sucess),
            error => console.log(error)
        )
    }

    changeEditableField(inputTask: HTMLInputElement) {
        inputTask.disabled = !inputTask.disabled;
        inputTask.focus();
    }
}