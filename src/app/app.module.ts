import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TestFavoriteComponent } from './test-favorite/test-favorite.component';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    TestFavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
