import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';


const routes: Routes = [
  { path: '', component: DocumentationComponent, pathMatch: 'full' },
  { path: 'Directives', loadChildren: () => import('./directives/directives.module').then(module => module.DirectivesModule) },
  { path: 'Pipes', loadChildren: () => import('./pipes/pipes.module').then(module => module.PipesModule) },
  { path: 'Services', loadChildren: () => import('./services/services.module').then(module => module.ServicesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
