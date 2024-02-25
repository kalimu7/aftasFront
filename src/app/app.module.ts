import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompetitionComponent } from './Component/competition/competition.component';
import { MemberComponent } from './Component/member/member.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './Component/dialog-content/dialog-content.component';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatDatepickerModule } from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogmemberComponent } from './Component/dialogmember/dialogmember.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DialoghuntingComponent } from './Component/dialoghunting/dialoghunting.component';
import { PodiumComponent } from './Component/podium/podium.component';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from './Component/login/login.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginInterceptor } from './Interceptor/login.interceptor';
import { AdminDashboradComponent } from './Component/admin-dashborad/admin-dashborad.component';


@NgModule({
  declarations: [
    AppComponent,
    CompetitionComponent,
    MemberComponent,
    DialogContentComponent,
    DialogmemberComponent,
    DialoghuntingComponent,
    PodiumComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AdminDashboradComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    ToastrModule.forRoot(),
    

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoginInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

    

}
