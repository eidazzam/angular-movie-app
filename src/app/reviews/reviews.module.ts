import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewsRoutingModule } from './reviews-routing.module';
import { SendfeedbackComponent } from './sendfeedback/sendfeedback.component';
import { SendmessageComponent } from './sendmessage/sendmessage.component';


@NgModule({
  declarations: [
    SendfeedbackComponent,
    SendmessageComponent,
  ],
  imports: [
    CommonModule,
    ReviewsRoutingModule
  ],
  exports: [
    SendfeedbackComponent,
    SendmessageComponent,
  ],
  bootstrap: [SendfeedbackComponent]
})
export class ReviewsModule {
  constructor(){
    console.log("ReviewsModule loaded");
  }
}
