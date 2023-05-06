import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotsNotFoundPageComponent } from './pages/not-found-page/not-found-page.component';



@NgModule({
  declarations: [
    /** Pages */
    TotsNotFoundPageComponent
  ],
  imports: [
    /** Angular */
    CommonModule
  ],
  exports: [
    /** Pages */
    TotsNotFoundPageComponent
  ]
})
export class TotsNotFoundModule { }
