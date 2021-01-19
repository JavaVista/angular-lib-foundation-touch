import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { FilterPipe } from '../pipes/filter/filter.pipe';


@NgModule({
  declarations: [CardComponent, FilterPipe],
  imports: [CommonModule],
  exports: [CardComponent, FilterPipe]
})
export class SharedModule { }
