import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }
  getData():Observable<any>{
    return this.http.get<any>(this.url);
  }

  getDataById(id:any):Observable<any>{
    return this.http.get<any>(this.url+'/'+id);
  }

}
