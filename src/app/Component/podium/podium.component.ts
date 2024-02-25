import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/Model/member';
import { RankingService } from 'src/app/Service/ranking.service';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnInit {
  constructor(private ranking: RankingService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.competitioncode = this.route.snapshot.paramMap.get('code');
    console.log('hello world ');

    this.loading = true;

    this.loadAsyncData().then(() => {
      this.loading = false;
    });
  }

  competitioncode: any;
  Members: any;
  loading: boolean = false;

  FetchWinners(code: string) {
    this.ranking.GetMembers(code).subscribe(
      (res: any) => {
        this.Members = res;
        console.log(this.Members);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  async calculeScores(code: any): Promise<void> {
    await this.ranking.CalculeScore(code).toPromise();
    console.log('score calculated');
    return Promise.resolve(); 
  }

  async loadAsyncData(): Promise<void> {

    await this.calculeScores(this.competitioncode);
    
    this.FetchWinners(this.competitioncode);
  }
}
