import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userdetail',
  standalone: false,
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {
 userId:string|null='';
  userdata:any;
  user: any;
  constructor(private route:ActivatedRoute,private userservice:UserService){

    this.userId=this.route.snapshot.paramMap.get('id');
    if(this.userId){
      this.userservice.getDataByID(this.userId).subscribe((data)=>{this.user=data})
    }
    
    }
  //   submit(data:any){
  //     this.userservice.getDataByID(data.id).subscribe(u=>this.userdata=u)
  // }
}
