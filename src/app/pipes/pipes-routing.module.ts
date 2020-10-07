import { NgModule } from '@angular/core';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { RouterModule, Routes } from '@angular/router';

const pipes_routes: Routes = [
  { path: '', component: PipeDocumentationComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pipes_routes)
  ],
  exports: [RouterModule]
})
export class PipesRoutingModule { }
