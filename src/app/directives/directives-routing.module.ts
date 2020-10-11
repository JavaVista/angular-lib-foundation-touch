import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';

const directives_routes: Routes = [
    { path: '', component: DirectiveDocumentationComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(directives_routes)
    ],
    exports: [RouterModule]
  })
  export class DirectivesRoutingModule { }
  