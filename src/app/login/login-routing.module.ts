import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { LazySubComponent } from './lazy-sub/lazy-sub.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: 'lazy-sub1', component: LazySubComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
