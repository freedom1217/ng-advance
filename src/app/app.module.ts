import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ShareModule } from './share/share.module';
import { NormalSubComponent } from './normal-sub/normal-sub.component';
// import { LazySubComponent } from './lazy-sub/lazy-sub.component';


@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent, // 拿掉 ，只能存在一個,
    NormalSubComponent,
    // LazySubComponent
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule // 似引用module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
