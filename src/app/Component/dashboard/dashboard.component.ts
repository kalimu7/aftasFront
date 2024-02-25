import { Component } from '@angular/core';
import { faPlusCircle,faCalendar,faPlayCircle,faUsers,faLocationDot,faRankingStar,faFishFins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  title = 'AftasAngular';
  rank = faRankingStar;
  users = faUsers;
  fish = faFishFins;


}
