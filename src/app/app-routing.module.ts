import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NormalSubComponent } from './normal-sub/normal-sub.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component : HomeComponent ,
  children: [ // localhost:4200/home/sub1
    {path: '', redirectTo: 'sub1', pathMatch: 'full'},
    {path: 'sub1', component: NormalSubComponent }
  ]},
  // {path: 'login', component: LoginComponent}
  {path: 'login', loadChildren: './login/login.module#LoginModule'}, // LoginModule名稱在login.module.ts 的export
  {path: 'post', loadChildren: './post/post.module#PostModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
