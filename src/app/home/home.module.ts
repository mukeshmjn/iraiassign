import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { EComponent } from './e/e.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AComponent, BComponent, CComponent, DComponent, EComponent, HomeComponent],
  imports: [
    CommonModule,RouterModule,
    FormsModule
  ]
})
export class HomeModule { }
