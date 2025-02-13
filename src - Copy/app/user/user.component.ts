import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  data:any;
constructor(api:UserService){

  api.getData().subscribe(d=>this.data=d)
  
}
}
