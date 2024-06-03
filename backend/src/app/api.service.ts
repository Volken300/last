import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }
formcat(){
  return this.http.get("http://localhost:8000/fr/fmd");
}

delcat(fd:any){
  return this.http.post("http://localhost:8000/fr/del",fd);
}

}
