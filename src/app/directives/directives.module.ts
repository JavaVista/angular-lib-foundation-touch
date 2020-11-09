import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ]
})
export class DirectivesModule { }
