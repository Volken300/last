import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) { }
  nug(fd:any){
   return this.http.post("http://localhost:8000/fr/submit",fd);
  }

}
