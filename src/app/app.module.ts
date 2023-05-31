import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './doctor/home/home.component';
import { PartientComponent } from './doctor/partient/partient.component';
import { NotificationComponent } from './doctor/notification/notification.component'; 
import { NavigationComponent } from './doctor/navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import { ScheduleComponent } from './doctor/schedule/schedule.component';
import { EmergencyComponent } from './doctor/emergency/emergency.component';
import { PatientsComponent } from './lab-tech/patients/patients.component';
import { MessageComponent } from './lab-tech/message/message.component';
import { PatientFormComponent } from './lab-tech/patient-form/patient-form.component';
import { LabtechNavComponent } from './lab-tech/labtech-nav/labtech-nav.component';
import  {  MatFormFieldModule,} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatRadioModule} from '@angular/material/radio';
import { PIdComponent } from './lab-tech/p-id/p-id.component';
import { PatientDetatialComponent } from './doctor/patient-detatial/patient-detatial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PartientComponent,
    NotificationComponent,
    LoginComponent,
    ScheduleComponent,
    EmergencyComponent,
    PatientsComponent,
    MessageComponent,
    PatientFormComponent,
    LabtechNavComponent,
    PIdComponent,
    PatientDetatialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
