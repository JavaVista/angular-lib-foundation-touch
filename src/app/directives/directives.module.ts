import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DirectivesRoutingModule } from './directives-routing.module';



@NgModule({
  declarations: [DirectiveDocumentationComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
