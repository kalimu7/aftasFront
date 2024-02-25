import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/Model/member';
import { MemberService } from 'src/app/Service/member.service';
import {Identity} from 'src/app/Enums/identity';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogService } from 'src/app/Service/dialog.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialogmember',
  templateUrl: './dialogmember.component.html',
  styleUrls: ['./dialogmember.component.css']
})
export class DialogmemberComponent implements OnInit{
  constructor(private fb : FormBuilder,private service : MemberService,@Inject(MAT_DIALOG_DATA) public data: any,private dialog : DialogService,private router : Router,private toastr : ToastrService  ){
    this.code = data;
  }
  myForm!:FormGroup;
  member: Member = new Member();
  code: string = '';
  identity = Identity;
  ngOnInit(): void {
    
    console.log("hello world this is dialog member compo");
    this.myForm = this.fb.group({
      
      identityNumber: ['', [Validators.required]],
      //competitionCode: ['', [Validators.required]],
    });

    


  }



  Submit(){
    if (this.myForm.valid) {
      
      this.member = this.myForm.value;
      this.member.competitionCode = this.code;
      console.log(this.member);
      const obj = {'code':this.code,'identity':this.myForm.value.identityNumber};
      this.service.AssignMemeber(obj).subscribe((res : any)=>{
        console.log(res);
        console.log("member created successfully");
        this.showSuccess();
        setTimeout(() => {
          this.navigateToSpecificMembers();
        }, 3000);
        this.closeDialog();
      },(err)=>{
        this.showFailure(err.error.message);
        console.log(err);
      })
    } else {
      this.showFailure('Form data is invalid. Please check the fields.');
      console.log('Form data is invalid. Please check the fields.');
    }
  }
  

  closeDialog(){
    this.dialog.closeDialog();
  }


  showSuccess() {
    this.toastr.success('Member Created successfully', 'Toastr fun!',{ timeOut: 5000 });
  }
  showFailure(message : any){
    this.toastr.error(message,'error');
  }

  navigateToSpecificMembers() {
    this.router.navigate([`/dashbord/member/${this.code}`]).then(()=>{
      window.location.reload();
    });
  }

}



