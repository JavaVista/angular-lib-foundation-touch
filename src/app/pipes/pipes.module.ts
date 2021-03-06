import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeDocumentationComponent } from './pipe-documentation/pipe-documentation.component';
import { PipesRoutingModule } from './pipes-routing.module';
import { SharedModule } from '../shared/shared.module';
import { TruncatePipe } from './truncate/truncate.pipe';
import { CreditcardfreeformatterPipe } from './creditcardfreeformatter/creditcardfreeformatter.pipe';
import { FlattenPipe } from './flatten/flatten.pipe';



@NgModule({
  declarations: [PipeDocumentationComponent, TruncatePipe, CreditcardfreeformatterPipe, FlattenPipe],
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
})
export class PipesModule { }
