import { Component, OnInit } from '@angular/core';
import { faSearch,faEye,faPenToSquare,faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AdminService } from 'src/app/Service/admin.service';

@Component({
  selector: 'app-admin-dashborad',
  templateUrl: './admin-dashborad.component.html',
  styleUrls: ['./admin-dashborad.component.css']
})
export class AdminDashboradComponent implements OnInit{
  ngOnInit(): void {
      this.GetAccount();
  }

  constructor(private service : AdminService){}
  account : any;

  GetAccount(){
    this.service.FetchAccount().subscribe((res)=>{
      console.log(res);
      this.account = res;
    },(err)=>{
      console.log(err);
    })
  }
  fsearch = faSearch;
  feye = faEye;
  fedite = faPenToSquare;
  fdelete = faTrashCan;




}
