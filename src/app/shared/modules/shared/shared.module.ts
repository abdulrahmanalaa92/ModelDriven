import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CustomTextboxComponent } from './custom-textbox/custom-textbox.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[CustomTextboxComponent],
  declarations: [CustomTextboxComponent]
})
export class SharedModule { }
