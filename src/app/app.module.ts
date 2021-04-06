import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputTextsComponent } from './input-texts/input-texts.component';
import { ResultsComponent } from './results/results.component';
import { DefaultSubstringFinderService } from './default-substring-finder.service';

@NgModule({
  declarations: [
    AppComponent,
    InputTextsComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DefaultSubstringFinderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
