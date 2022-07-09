import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { LoggedInGuard } from './pages/auth/logged-in.guard';


export const routes: Routes = [
  {
    path: 'home',
    component: LayoutComponent,
    loadChildren: () => import('src/app/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    // component: AuthComponent,
    loadChildren: () => import('src/app/pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'kanban-board',
    component: LayoutComponent,
    loadChildren: () => import('src/app/pages/kanban-board/kanban-board.module').then(m => m.KanbanBoardModule),
    canActivate: [LoggedInGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
