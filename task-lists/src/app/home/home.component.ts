import { Component } from '@angular/core';

import { TaskService } from '../_services/task.service';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {

    constructor(
        private taskService: TaskService
    ) {}

    ngOnInit() {}

    addTask() {
        let valueNewTask = prompt("Adicionar nova tarefa", "");

        if (valueNewTask == "" || valueNewTask == "null" || valueNewTask == null) return;

        this.taskService.addTask(valueNewTask).subscribe(
            sucess => location.reload(true),
            error => console.log(error)
        );
    }

}