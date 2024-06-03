import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  
onClick($event: MouseEvent) {
throw new Error('Method not implemented.');
}

  constructor(private api:ApiService){}

aug(val:any){

var kd=new FormData();
kd.append("name",val.name);
kd.append("number",val.number);
kd.append("email",val.email);
kd.append("date",val.date);

  this.api.nug(kd).subscribe((data:any)=>{
    console.log(data);
  })
  
}

}
