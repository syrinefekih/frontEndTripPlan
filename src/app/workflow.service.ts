import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowService {

  idUser: any;
  camundaUrl="http://localhost:8088/travelplan";

  constructor(private http: HttpClient) { }


//START the process with a business key == idUser
  startProcess(idUser:any){
    const urlTask= `${this.camundaUrl}/start-process/`+idUser;
    this.http.post<string>(urlTask,"").subscribe(data => {console.log("khedmet houn",data)})
  }

//COMPLETE TASK 1 :
  completeTask1(idUser : String) {
    const urlTask= `${this.camundaUrl}/complete-task/task1/`+idUser;
    this.http.post<string>(urlTask, "").subscribe(data => {console.log("khedmet houn 2222222",data)});
    
  }

/*COMPLETE TASK 2:
completeTask2(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task2/`+idUser;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log(data)});
}*/

//COMPLETE TASK 3:
completeTask3(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task3/`+idUser;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log("khedmet houn",data)});
}

//COMPLETE TASK 4:
completeTask4(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task4/`+idUser;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log("khedmet houn",data)});
}
//COMPLETE TASK 5:
completeTask5(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task5/`+idUser;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log("khedmet houn",data)});
}
//COMPLETE TASK 6:
completeTask6(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task6/`+idUser;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log("khedmet houn",data)});
}

//COMPLETE TASK 7:
completeTask7(idUser : String,confirmation : string) {
  const urlTask= `${this.camundaUrl}/complete-task/task7/${idUser}/${confirmation}`;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log(data)});
}

//COMPLETE TASK 8:
completeTask8(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task8/${idUser}`;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log(data)});
}

//COMPLETE TASK 9:
completeTask9(idUser : String) {
  const urlTask= `${this.camundaUrl}/complete-task/task9/${idUser}`;
  this.http.post<string>(urlTask, "").subscribe(data => {console.log(data)});
}

}
