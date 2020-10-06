import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { CardComponent } from './components/card/card.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { PipeDocumentationComponent } from './pipes/pipe-documentation/pipe-documentation.component';
import { ServiceDocumentationComponent } from './services/service-documentation/service-documentation.component';
import { DirectiveDocumentationComponent } from './directives/directive-documentation/directive-documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    ScrollToTopComponent,
    DocumentationComponent,
    PipeDocumentationComponent,
    ServiceDocumentationComponent,
    DirectiveDocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
