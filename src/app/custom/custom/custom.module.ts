import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './custom.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CustomComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CustomModule { }
