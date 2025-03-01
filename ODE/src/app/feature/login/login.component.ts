import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {


  password:string =''
  username:string=''
  constructor(private service:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
  if (this.username && this.password){ 
    this.service.onLogin().subscribe((data)=>{
      console.log('Login service response:', data);
      const user = data.find((user: { username: string; password: string; }) => user.username === this.username && user.password === this.password);
      if (user) {
        const role=user.role
        localStorage.setItem('role',role)
        this.router.navigate(['/products']);
        console.log('Role stored in localStorage:', localStorage.getItem('role'));
      } else {
        this.router.navigate(['/login']);
      }
    })
  }
  }

}
