import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FrontEndComponent } from './front-end.component';
import { routing } from './front-end.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
      routing,
  ],
  declarations: [
    FrontEndComponent,
  ],
})
export class FrontEndModule {}
