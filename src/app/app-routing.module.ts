import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  { path: 'frgtmob', loadChildren: './frgtmob/frgtmob.module#FrgtmobPageModule' },
  { path: 'otppwd', loadChildren: './otppwd/otppwd.module#OtppwdPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
