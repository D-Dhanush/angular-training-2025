import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  submit(data:any){
    sessionStorage.removeItem('user');
    console.log(data);
    if(data.uid=='admin' && data.password=='123'){
      alert('success');
    sessionStorage.setItem('user','admin');
    sessionStorage.setItem('jwt','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c ');

  }
    else{
    alert('fail')
    }
  
}
}
