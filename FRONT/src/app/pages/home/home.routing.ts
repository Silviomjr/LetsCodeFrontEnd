import { NgModule } from "@angular/core";
import { HomeComponent } from "src/app/pages/home/home.component";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}