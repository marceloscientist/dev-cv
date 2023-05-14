import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { FooterComponent } from './footer/footer.component';
import { BarComponent } from './components/bar/bar.component';
import { DetailedCardComponent } from './right-column/detailed-card/detailed-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftColumnComponent,
    RightColumnComponent,
    FooterComponent,
    BarComponent,
    DetailedCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
