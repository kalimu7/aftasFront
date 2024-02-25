import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompetitionComponent } from './Component/competition/competition.component';
import { MemberComponent } from './Component/member/member.component';
import { PodiumComponent } from './Component/podium/podium.component';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { RegisterComponent } from './Component/register/register.component';
import { AdminDashboradComponent } from './Component/admin-dashborad/admin-dashborad.component';
import { juryGuard } from './Guards/jury.guard';
import { adminGuard } from './Guard/admin.guard';
import { adherantGuard } from './Guards/adherant.guard';
import { CompetitionAdherentComponent } from './Component/competition-adherent/competition-adherent.component';
import { PoduimMemberComponent } from './Component/poduim-member/poduim-member.component';

const routes: Routes = [
  
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"admin",component:AdminDashboradComponent,canActivate : [adminGuard]},
  {path:"competition",component:CompetitionAdherentComponent,canActivate : [adherantGuard]},
  {path:"podium/:code",component:PoduimMemberComponent,canActivate : [adherantGuard]},
  {path:"dashbord",component:DashboardComponent,canActivate : [juryGuard],children : [
    {path:"competition",component:CompetitionComponent,canActivate : [juryGuard]},
    {path:"member/:code",component:MemberComponent,canActivate : [juryGuard]},
    {path:"podium/:code",component:PodiumComponent,canActivate : [juryGuard]}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
