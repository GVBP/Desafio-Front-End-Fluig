import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TaskService {

    private readonly API = 'http://localhost:3000';
    private readonly LISTID = 1;

    constructor(private http: HttpClient) { }

    addTask(valueNewTask: string) {
        let dto = {
            "assigneeId": "string",
            "deadline": "string",
            "description": `${valueNewTask}`,
            "name": "string",
            "notes": "string",
            "parentTaskId": "string",
            "priorityId": "string",
            "sortValue": 0,
            "statusId": "string",
            "timeDeadlineType": "DAYS",
            "timeDeadlineValue": 0,
            "statusTask": false
        };

        return this.http.post(`${this.API}/lists/${this.LISTID}/tasks`, dto).pipe(take(1));
    }

    getAllTasks() {
        return this.http.get<any[]>(`${this.API}/lists/${this.LISTID}/tasks`)
            .pipe(catchError(err => {
                const error = err.error.message || err.statusText;
                return throwError(error);
            }));
    }

    deleteTask(taskId: number) {
        //return this.http.delete(`${this.API}/lists/${this.LISTID}/tasks/${taskId}`).pipe(take(1));
        return this.http.delete(`${this.API}/tasks/${taskId}`).pipe(take(1));
    }

    updateTask(task: any) {
        //return this.http.put(`${this.API}/lists/${this.LISTID}/tasks/${taskId}`, taskDescription).pipe(take(1));
        return this.http.put(`${this.API}/tasks/${task.id}`, task).pipe(take(1));
    }

}