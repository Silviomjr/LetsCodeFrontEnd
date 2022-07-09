import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule} from '@angular/material/input'; 
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  exports: [CardComponent]
})
export class CardModule { }
