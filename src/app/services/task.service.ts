import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseTask } from '../domain/base-task';
import { environment } from '../../environments/environment';
import { Task } from '../domain/task';

@Injectable()
export class WishService {

  constructor(private http: HttpClient) {
  }

  getDigest(): Observable<BaseTask[]> {
    return this.http.get<BaseTask[]>(`${environment.api}/tasks`);
  }

/*  getById(id: number): Observable<Wish> {
    return this.http.get<Wish>(`${environment.api}/wishes/${id}`);
  }*/

  create(task: Task): Observable<any> {
    return this.http.post(`${environment.api}/tasks`,
      task,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  update(id: number, task: Task): Observable<any> {
    return this.http.put(`${environment.api}/tasks/${id}`,
      task,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/tasks/${id}`,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

/*  like(id: number): Observable<any> {
    return this.http.post(`${environment.api}/wishes/${id}/likes`,
      null,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }

  dislike(id: number): Observable<any> {
    return this.http.delete(`${environment.api}/wishes/${id}/likes`,
      {
        responseType: 'text',
        observe: 'response'
      }
    );
  }*/
}
