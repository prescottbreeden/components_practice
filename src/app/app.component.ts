import { Movie } from './movie';
import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './test-favorite/test-favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  SpaceBalls = new Movie('Space Balls');
  Caddyshack = new Movie('Caddyshack');
  ThreeAmigos = new Movie('Three Amigos');
  Avengers = new Movie('Avengers');
  Deadpool = new Movie('Deadpool');
  obj: any;

  movies = [
    this.SpaceBalls,
    this.Caddyshack,
    this.ThreeAmigos,
    this.Avengers,
    this.Deadpool
  ];

  post = {
    title: 'Title',
    isFavorite: true
  };
  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log(eventArgs);
  }
}
