import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ErrorModule } from './components/error/error.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ErrorModule
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [
  ]
})
export class CoreModule { }
