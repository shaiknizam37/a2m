import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FrgtmobPage } from './frgtmob.page';

const routes: Routes = [
  {
    path: '',
    component: FrgtmobPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FrgtmobPage]
})
export class FrgtmobPageModule {}
