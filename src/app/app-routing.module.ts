import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';


const routes: Routes = [
  { path: '', component: DocumentationComponent },
  { path: 'Directives', component: DirectiveDocumentationComponent },
  { path: 'Services', component: ServiceDocumentationComponent },
  { path: 'Pipes', component: PipeDocumentationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
