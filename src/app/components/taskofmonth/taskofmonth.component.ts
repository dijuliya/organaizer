import {Component, OnInit, ViewChild} from '@angular/core';
import {Taskofmonth} from "./taskofmonth";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {NgForm} from "@angular/forms";

declare const $: any;

@Component({
  selector: 'app-taskofmonth',
  templateUrl: './taskofmonth.component.html',
  styleUrls: ['./taskofmonth.component.css']
})
export class TaskofmonthComponent implements OnInit {
  @ViewChild('taskEditForm') form: NgForm;
  title: string = "Task for month";
  endpoint: string = "/taskofmonth";
  taskofmonth: Taskofmonth[] = [ ];
  //history: TaskofmonthHistory[] = [ ];
  currentTaskofmonth: Taskofmonth = <Taskofmonth>{
    id: 0,
    name: '',
    content: '',
    isDone: false,
    iname: ''
  };

  /*currentHistory: IncidentHistory = <IncidentHistory>{
    id: 0,
    message: '',
    user: {id: 0}
  };*/
  constructor (private http: HttpClient) {}
  ngOnInit(): void {
    console.log(environment.api);
    this.getTaskofmonth();
  }
  getTaskofmonth(): void {
    this.http.get<Taskofmonth[]>(environment.api + this.endpoint).subscribe(data => {
      console.log(data);
      //noinspection TypeScriptValidateTypes
      this.taskofmonth = data;
    });
  }

  onAdd() {
    this.clear();
    this.show();
  }

  clearCurrentTaskofmonth(): void {
    this.currentTaskofmonth = <Taskofmonth>{
      id: 0,
      name: '',
      content: '',
      isDone: false,
      iname: ''
    };
    /*this.currentHistory = {
      id: 0,
      message: '',
      user: {id: 0}
    };
    this.history = [];*/
  }
  setCurrentTaskofmonth(item: Taskofmonth): void {
    this.currentTaskofmonth = item;
  }
  addTaskofmonth(): void {
    this.http.post(environment.api + this.endpoint, this.currentTaskofmonth).subscribe(() => {
      this.getTaskofmonth();
      this.clearCurrentTaskofmonth();
    });
  }
  updateTaskofmonth(): void {
    this.http.post(environment.api + this.endpoint, this.currentTaskofmonth).subscribe(() => {
      this.getTaskofmonth();
      this.clearCurrentTaskofmonth();
    });
  }
  removeTaskofmonth(): void {
    this.http.delete(environment.api + this.endpoint + "/" + this.currentTaskofmonth.id).subscribe(() => {
      this.getTaskofmonth();
      this.clearCurrentTaskofmonth();
    });
  }

  private clear() {
   // this.taskofmonth = new item(0, '', '', 0, '');
  }

  private show() {
    $('#taskEditModal').modal('open');
  }

  private close() {
    $('#taskEditModal').modal('close');
  }
  /*loadIncidentHistory(item: Taskofmonth): void {
    this.currentTaskofmonth = item;
    this.http.get<IncidentHistory[]>(environment.api + "/incident/" + this.currentTaskofmonth.id + "/history").subscribe(data => {
      console.log(data);
      //noinspection TypeScriptValidateTypes
      this.history = data;
    });
  }*/

  /*addIncidentHistory(): void {
    this.http.post(environment.api + "/incident/" + this.currentTaskofmonth.id + "/history", this.currentHistory).subscribe(() => {
      this.loadIncidentHistory(this.currentTaskofmonth)
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
