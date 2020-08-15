import { ParentComponent } from 'src/components/parent/parent.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from 'src/guards/role-guard';
import { AppResolver } from 'src/resolvers/app-resolver';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {
    path: '',
    children: [
      {
        path: 'admin',
        component: ParentComponent,
        canActivate: [RoleGuard],
        data: {
          expectedRole: 'admin',
        },
        resolve: {
          cres: AppResolver,
        },
        children: [
          {
            path: 'orders',
            component: ParentComponent,
          },
        ],
      },
      {
        path: 'my-test/:id',
        loadChildren: () =>
          import('./../modules/test-first/test-first.module').then(
            (m) => m.TestFirstModule
          ),

      },
      { path: 'redirect', redirectTo: '/my-test/500', pathMatch: 'full' },
      { path: '**', redirectTo: '' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
