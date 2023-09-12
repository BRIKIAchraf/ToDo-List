import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceUrl : string ;
  constructor(private http : HttpClient ) {
    this.serviceUrl = "http://localhost:3000/tasks";
   }
   // is a post method that returns an Observable of type Task
   // we need a parameter for this method
   addTask(task : Task):Observable<Task>{ // Task is a model class
     return this.http.post<Task>(this.serviceUrl,task); //
   }
   // is a get method that returns an Observable of type Task
   // we dont need a parameter for this method
   getAllTask():Observable<Task[]>{
     return this.http.get<Task[]>(this.serviceUrl);
   }
    // is a get method that returns an Observable of type Task
    // we need a parameter for this method  , id is a number ,
    deleteTask(task : Task):Observable<Task>{
      return this.http.delete<Task>(this.serviceUrl+"/"+task.id);
    }
    editTask(task : Task):Observable<Task>{
      return this.http.put<Task>(this.serviceUrl+"/"+task.id,task);
    }


}
