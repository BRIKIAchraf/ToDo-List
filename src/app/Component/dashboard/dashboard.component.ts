import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { CrudService } from 'src/app/service/crud.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  taskObj : Task = new Task();
  taskArray : Task[] = []; // To store the data from the API
  addTaskValue : string = ''; // To store the value from the input field

  constructor (private crudService : CrudService) {
       this.crudService.getAllTask().subscribe((data)=>{
         console.log(data);
       }
        );
  }

  ngOnInit(): void {
    this.taskObj = new Task(); // To clear the input field
    this.crudService.getAllTask();
   }

   getAllTask() {
     this.crudService.getAllTask().subscribe((response) => {
      this.taskArray = response;
     },err => {
        alert("unable to get the data");
    });
   }


  addTask(etask : Task) {
   this.crudService.addTask(etask).subscribe(res =>{
   this.ngOnInit();
  },err => {
  alert(err );
    });
   }
}
 
