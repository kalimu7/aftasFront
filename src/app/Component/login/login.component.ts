import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import {  Login } from 'src/app/Model/Compte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm !: FormGroup;
  LoginCompte !: Login;
  
  constructor(private fb :FormBuilder,private service:AuthService,private toastr : ToastrService,private route : Router ){}
  ngOnInit(): void {
  
    this.loginForm = this.fb.group({

      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      
    })

    

  }
  Submit(){
    if(this.loginForm.valid){
      this.LoginCompte = this.loginForm.value;
      this.service.Login(this.LoginCompte).subscribe((res:any)=>{
        localStorage.setItem('token',res.token);
        console.log(res);
        this.showSuccess("loged in succ");
        if(res.role == "[Adherent]"){
          this.route.navigate(['/competition']);
        }else if(res.role == "[Jury]"){
          this.route.navigate(['/dashbord']);
        }else if(res.role == "[Manager]"){
          this.route.navigate(['/admin']);
        }
        



      },(err)=>{
        console.log(err);
        this.showFailure(err.error);
      })
    }else{
      this.showFailure("not valide");
      console.log("form isnt valide");
    }
  }

  showSuccess(msg : string) {
    this.toastr.success(msg, 'Toastr fun!',{positionClass: 'toast-top-right'});
  }
  showFailure(message : any){
    this.toastr.error(message,'error');
  }

}
