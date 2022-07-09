import { NgModule } from "@angular/core";
import { AuthComponent } from "src/app/pages/auth/auth.component";
import { Routes, RouterModule } from "@angular/router";

export const routes: Routes = [
    { path: '', component: AuthComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}