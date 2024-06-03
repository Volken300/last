import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

allfrm!:any[]




delf(did:any){

  if(window.confirm('are you sure')){
  var fd=new FormData()
  fd.append("id",did);

  this.api.delcat(fd).subscribe((data:any)=>{
    console.log(data);
    this.getdata();
  })
}
}




  constructor(private api:ApiService){}

getdata(){
  this.api.formcat().subscribe((data:any)=>{
    this.allfrm=data;
  })
}


ngOnInit(){
 this.getdata();
}

}
