import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardRoutingModule } from './kanban-board.routing';
import { KanbanService } from 'src/app/core/services/kanban.service';
import { CardModule } from 'src/app/core/components/card/card.module';
import { KanbanBoardComponent } from './kanban-board.component';



@NgModule({
  declarations: [KanbanBoardComponent],
  imports: [
    CommonModule,
    KanbanBoardRoutingModule,
    CardModule
  ],
  providers: [
    KanbanService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KanbanBoardModule { }
