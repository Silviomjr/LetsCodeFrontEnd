import { NgModule } from "@angular/core";
import { KanbanBoardComponent } from "src/app/pages/kanban-board/kanban-board.component";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', component: KanbanBoardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KanbanBoardRoutingModule {
}