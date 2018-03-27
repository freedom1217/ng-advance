import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
// import { ShareComponent } from '../share/share.component';//login跟share是同一層，所以不能重覆宣告
import { LazySubComponent } from './lazy-sub/lazy-sub.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent, // 從app.module.ts 移動到這
    // ShareComponent, // 有引用才可以呼叫
    LazySubComponent
  ]
})
export class LoginModule { }
