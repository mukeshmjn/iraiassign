import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Ques1Component } from './ques1/ques1.component';
import {Ques3Component} from './ques3/ques3.component';
import { XComponent } from './ques4/x/x.component';
import { ZComponent } from './ques4/z/z.component';
const routes: Routes = [ 
  { path: 'ques1', component: Ques1Component },
  { path: 'ques3', component: Ques3Component},
  { path:'home', component: HomeComponent},
  {path:'z',component:ZComponent},
  {path:'x',component:XComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
