import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PipeDocumentationComponent],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ]
})
export class PipesModule { }
