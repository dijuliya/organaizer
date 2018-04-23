import {Component, OnInit, ViewChild} from '@angular/core';
import {Taskofday} from "./taskofday";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NgForm} from "@angular/forms";

declare const $: any;

@Component({
  selector: 'app-taskofday',
  templateUrl: './taskofday.component.html',
  styleUrls: ['./taskofday.component.css']
})
export class TaskofdayComponent implements OnInit {
  @ViewChild('taskEditForm') form: NgForm;
  title: string = "Task for day";
  endpoint: string = "/taskofday";
  taskofday: Taskofday[] = [];
  //history: TaskofdayHistory[] = [ ];
  currentTaskofday: Taskofday = <Taskofday>{
    id: 0,
    content: ''
  };

  /*currentHistory: IncidentHistory = <IncidentHistory>{
    id: 0,
    message: '',
    user: {id: 0}
  };*/
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    console.log(environment.api);
    this.getTaskofday();
  }

  getTaskofday(): void {
    this.http.get<Taskofday[]>(environment.api + this.endpoint).subscribe(data => {
      console.log(data);
      //noinspection TypeScriptValidateTypes
      this.taskofday = data;
    });
  }

  onAdd() {
    this.clear();
    this.show();
  }

  clearCurrentTaskofday(): void {
    this.currentTaskofday = <Taskofday>{
      id: 0,
      content: ''
    };
    /*this.currentHistory = {
      id: 0,
      message: '',
      user: {id: 0}
    };
    this.history = [];*/
  }

  setCurrentTaskofday(item: Taskofday): void {
    this.currentTaskofday = item;
  }

  addTaskofday(): void {
    this.http.post(environment.api + this.endpoint, this.currentTaskofday).subscribe(() => {
      this.getTaskofday();
      this.clearCurrentTaskofday();
    });
  }

  updateTaskofday(): void {
    this.http.post(environment.api + this.endpoint, this.currentTaskofday).subscribe(() => {
      this.getTaskofday();
      this.clearCurrentTaskofday();
    });
  }

  removeTaskofday(): void {
    this.http.delete(environment.api + this.endpoint + "/" + this.currentTaskofday.id).subscribe(() => {
      this.getTaskofday();
      this.clearCurrentTaskofday();
    });
  }

  private clear() {
    // this.taskofday = new item(0, '', '', 0, '');
  }

  private show() {
    $('#taskEditModal').modal('open');
  }

  private close() {
    $('#taskEditModal').modal('close');
  }

  /*loadIncidentHistory(item: Taskofday): void {
    this.currentTaskofday = item;
    this.http.get<IncidentHistory[]>(environment.api + "/incident/" + this.currentTaskofday.id + "/history").subscribe(data => {
      console.log(data);
      //noinspection TypeScriptValidateTypes
      this.history = data;
    });
  }*/

  /*addIncidentHistory(): void {
    this.http.post(environment.api + "/incident/" + this.currentTaskofday.id + "/history", this.currentHistory).subscribe(() => {
      this.loadIncidentHistory(this.currentTaskofday)
      this.currentHistory = {
        id: 0,
        message: '',
        user: {id: 0}
      };
    });
  }

  removeIncidentHistory(item: IncidentHistory): void {
    this.http.delete(environment.api + "/incident/" + this.currentIncident.id + "/history/" + item.id).subscribe(() => {
      this.loadIncidentHistory(this.currentIncident)
    });
  }*/
}
