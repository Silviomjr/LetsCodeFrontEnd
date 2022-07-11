import { NgModule } from "@angular/core";
import { NotFoundComponent } from "src/app/pages/not-found/not-found.component";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRoutingModule {
}