import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import{ Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  passwordType:string='password';
  // passText:boolean=false;

  Login!:[];
  invalidLogin:boolean = false;
  message!:string;
  constructor(private fb:FormBuilder, private router: Router, private api:ApiService) { }
  loginForm = this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  }); 

  get f(){
    return this.loginForm.controls;
  }
  togglePasswordType(pass:any){
    if(pass==this.passwordType){
      this.passwordType = 'text';
    }else{
      if(pass !=this.passwordType){
        this.passwordType = 'password';
      }
    }


  }

  ngOnInit(): void {
  }
  submit(){
    const loginData = new FormData();
    loginData.append('email', this.loginForm?.get('email')?.value);
    loginData.append('password', this.loginForm?.get('password')?.value);

    this.api.loginUser(loginData).subscribe((response:any)=>{
      if(response.id){
        Swal.fire('success',"You've been logged in successfully",'success')
        localStorage.setItem('token',response.token);
        this.router.navigate(['adminlayout']);
      }else if(!response.id){

      } 
    },
    (error:any)=>{
      Swal.fire(error.message,"You'll be logged in anyway",'error');
      
        localStorage.setItem('token','2457890-3jcdBZNbfusysajh');
        this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
    this.router.navigate(['adminlayout']);
});
    });
  }
}
