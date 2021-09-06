import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveDocumentationComponent } from './directive-documentation/directive-documentation.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { DebounceClickDirective } from './debounce-click/debounce-click.directive';
import { SharedModule } from '../shared/shared.module';
import { RippleClickDirective } from './ripple-click/ripple-click.directive';



@NgModule({
  declarations: [DirectiveDocumentationComponent, DebounceClickDirective, RippleClickDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    SharedModule
  ]
})
export class DirectivesModule { }
