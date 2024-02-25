import { Component, Inject, OnInit } from '@angular/core';
import { Fish } from 'src/app/Model/fish';
import { Hunting } from 'src/app/Model/hunting';
import { MemberService } from 'src/app/Service/member.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HuntingService } from 'src/app/Service/hunting.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dialoghunting',
  templateUrl: './dialoghunting.component.html',
  styleUrls: ['./dialoghunting.component.css']
})
export class DialoghuntingComponent implements OnInit {
  myForm!: FormGroup;
  fishs: Fish[] = [];
  ids: any;
  hunting: Hunting = new Hunting(); 

  constructor(private service: MemberService,private hutnigservice : HuntingService, @Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder,private router : Router,private toastr : ToastrService) {
    this.ids = data;
  }

  ngOnInit() {
    this.initForm(); 
    this.fetchFish();
    console.log("hello hunting");
    console.log(this.ids);
  }





  initForm() {
    this.myForm = this.fb.group({
      fishname: [null, Validators.required],
      weight: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
      numberOfFish: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    });
  }

  fetchFish() {
    this.service.GetFish().subscribe((res: any) => {
      this.fishs = res;
      console.log(this.fishs);
    });
  }

  Submit() {
    if (this.myForm.valid) {
      this.hunting = this.myForm.value;
      this.hunting.competitioncode = this.ids.code;
      this.hunting.membernum = this.ids.mem;
      console.log("Adding hunting", this.hunting);
      this.hutnigservice.addHunting(this.hunting).subscribe((res:any)=>{
        console.log("hunting inserted");
        this.showSuccess();
        console.log(res);
        setTimeout(() => {
          this.navigateToSpecificCompetition();
        }, 1500);
      },(err)=>{

        this.showFailure(err.error.message);
        console.log(err.error.message);
      })
    } else {
      this.showFailure("Form is invalid");
      console.log("Form is invalid");
    }
  }


  showSuccess() {
    this.toastr.success('hunting inserted successfully', 'Toastr fun!',{ timeOut: 5000 });
  }


  
  showFailure(message : any){
    this.toastr.error(message,'error');
  }



  navigateToSpecificCompetition() {
    this.router.navigate([`/member/${this.ids.code}`]).then(()=>{
      window.location.reload();
    });
  }


}
