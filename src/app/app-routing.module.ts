import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './doctor/navigation/navigation.component';
import { HomeComponent } from './doctor/home/home.component';
import { PartientComponent } from './doctor/partient/partient.component';
import { LoginComponent } from './login/login.component';
import { NotificationComponent } from './doctor/notification/notification.component';
import { ScheduleComponent } from './doctor/schedule/schedule.component';
import { EmergencyComponent } from './doctor/emergency/emergency.component';
import { PatientFormComponent } from './lab-tech/patient-form/patient-form.component';
import { LabtechNavComponent } from './lab-tech/labtech-nav/labtech-nav.component';
import { PIdComponent } from './lab-tech/p-id/p-id.component';
import { PatientDetatialComponent } from './doctor/patient-detatial/patient-detatial.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
  path: '',
  component:NavigationComponent,
  children: [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: 'notification',
      component: NotificationComponent,
    },
    {
      path: 'partient',
      component: PartientComponent,
    },
    {
      path: 'schedule',
      component:ScheduleComponent,
    },
    {
      path:'emergency',
      component:EmergencyComponent,
    },

    {
      path: 'details',
      component:PatientDetatialComponent,
    }
  ]
},
{
  path: '',
  component: LabtechNavComponent,
  children:[
    {
      path:'patient-form',
      component:PatientFormComponent,
    },
    {
      path:'pId',
      component:PIdComponent,
    }


  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
