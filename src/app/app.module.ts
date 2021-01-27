import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques1Component } from './ques1/ques1.component';
import { Ques3Component } from './ques3/ques3.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from './home/home.module';
import { XComponent } from './ques4/x/x.component';
import { YComponent } from './ques4/y/y.component';
import { ZComponent } from './ques4/z/z.component';

@NgModule({
  declarations: [
    AppComponent,
    Ques1Component,
    Ques3Component,
    XComponent,
    YComponent,
    ZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
