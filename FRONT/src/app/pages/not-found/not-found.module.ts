import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { NotFoundRoutingModule } from "src/app/pages/not-found/not-found.routing";


@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
