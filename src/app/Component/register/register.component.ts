import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from 'src/app/Model/Compte';
import { AuthService } from 'src/app/Service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  compte !: Compte;
  constructor(private fb :FormBuilder,private service:AuthService,private toastr : ToastrService ){}
  ngOnInit(): void {
  
    this.RegisterForm = this.fb.group({
      name: ['', Validators.required],
      familyName: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', [Validators.required]],
      identityNumber: ['', [Validators.required]],
    })


  }

  RegisterForm !:FormGroup; 

  Submit(){
      if(this.RegisterForm.valid){
        this.compte = this.RegisterForm.value;
        this.service.Register(this.compte).subscribe((res)=>{
          console.log(res);
          this.showSuccess("accout created successfully");
        },(err)=>{

          this.showFailure(err.error);
          console.log(err);
        })
        
      }else{
        this.showFailure("form not valide");
        console.log("its not valide");
      }
  }

  showSuccess(msg : string) {
    this.toastr.success('Member Created successfully', 'Toastr fun!',{positionClass: 'toast-top-right'});
  }
  showFailure(message : any){
    this.toastr.error(message,'error');
  }


}
