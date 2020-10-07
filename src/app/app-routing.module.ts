import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';


const routes: Routes = [
  { path: '', component: DocumentationComponent, pathMatch: 'full' },
  { path: 'Directives', component: DirectiveDocumentationComponent },
  { path: 'Services', component: ServiceDocumentationComponent },
  { path: 'Pipes', loadChildren: () => import('./pipes/pipes.module').then(module => module.PipesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
