import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HttpClientModule} from '@angular/common/http';
import { TablaComponent } from './components/tabla/tabla.component';
import { CardComponent } from './components/card/card.component';
import { MortyDataComponent } from './components/morty-data/morty-data.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    NavBarComponent,
    TablaComponent,
    CardComponent,
    MortyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
