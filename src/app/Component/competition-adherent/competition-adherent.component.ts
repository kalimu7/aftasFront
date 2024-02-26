import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPlusCircle,faCalendar,faPlayCircle,faUsers,faLocationDot,faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { Competition } from 'src/app/Model/competition';
import { CompetitionService } from 'src/app/Service/competition.service';

@Component({
  selector: 'app-competition-adherent',
  templateUrl: './competition-adherent.component.html',
  styleUrls: ['./competition-adherent.component.css']
})
export class CompetitionAdherentComponent implements OnInit{

  constructor(private service : CompetitionService,private fb :FormBuilder){}
  ngOnInit(): void {
    this.GetCompetition();
  }
  competitions : Competition[] =[];
  facofe = faPlusCircle;
  date = faCalendar;
  play = faPlayCircle;
  users = faUsers;
  
  city = faLocationDot;
  myForm!: FormGroup;
  totlaPage : any;
  pageSize = 6;
  pageIndex = 0;

  GetCompetition(){
    
    this.service.GetCompetitionMember().subscribe((res :any)=>{
      console.log(res);
      this.competitions  = res;
    },(err)=>{
      console.log(err);
    })
  }

}
