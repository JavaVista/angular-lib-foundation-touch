import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { StarRatingsComponent } from './components/star-ratings/star-ratings.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { SharedModule } from './shared/shared.module';
import { LoaderComponent } from './components/loader/loader.component';
import { CreditCardInputComponent } from './components/credit-card-input/credit-card-input.component';
import { FormsModule } from '@angular/forms';
import { TwitterPostComponent } from './components/twitter-post/twitter-post.component';
import { LinkedinPostComponent } from './components/linkedin-post/linkedin-post.component';
import { ModalComponent } from './components/modal/modal.component';
import { QuoteComponent } from './components/quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    AccordionComponent,
    ProgressBarComponent,
    StarRatingsComponent,
    ScrollToTopComponent,
    DocumentationComponent,
    LoaderComponent,
    CreditCardInputComponent,
    TwitterPostComponent,
    LinkedinPostComponent,
    ModalComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
