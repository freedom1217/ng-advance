import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShareComponent],
  exports: [ShareComponent] // share module，注入到app module
})
export class ShareModule { }
