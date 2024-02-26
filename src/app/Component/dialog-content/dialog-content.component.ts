import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Competition } from 'src/app/Model/competition';
import { CompetitionService } from 'src/app/Service/competition.service';


@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css'],
  
})
export class DialogContentComponent implements OnInit {
  constructor(private fb :FormBuilder,private service:CompetitionService,private router : Router,private toastr : ToastrService){}
  myForm!:FormGroup;

  compet =  new Competition();
  
  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      date: ['', [Validators.required, this.isValidDate]],
      startTime: ['', [Validators.required]],
      location: ['', [Validators.required]],
      numberOfParticipants: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      endTime: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^\d+(\.\d+)?$/)]],
    });
  }
  isValidDate(control:any) {
    const inputDate = new Date(control.value);
    return !isNaN(inputDate.getTime()) ? null : { invalidDate: true };
  }

  getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    let month: string | number = today.getMonth() + 1; 
    let day: string | number = today.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  }

  Submit() {
    if (this.myForm.valid) {
      
      this.compet = this.myForm.value;
      console.log(this.compet);
      this.service.InsertCompetition(this.compet).subscribe((res)=>{
        console.log(res);
        console.log("inseted");
        this.showSuccess();
        setTimeout(() => {
          this.navigateToCompetition();
        }, 1500);
        // this.ShowSucess("inserted successfully");
      },(err)=>{
        
        console.log(err);
        err.error.errors.forEach((errorMessage: string) => {
          this.showFailure(errorMessage);
        });
        
      });
    } else {
      
      this.showFailure('Form data is invalid. Please check the fields.');
    }
  }

  showSuccess() {
    this.toastr.success('Comeptition Created successfully', 'Toastr fun!',{ timeOut: 10000 });
  }
  showFailure(message : any){
    this.toastr.error(message,'error');
  }


  navigateToCompetition() {
    this.router.navigate([`dashbord/competition`]).then(()=>{
      window.location.reload();
    });
  }

}
