import { Movie } from './movie';
import { Component } from '@angular/core';
import { RatingChangedEventArgs } from './favorite/favorite.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  DavinciCode = new Movie('Davinci Code', 1, false);
  SpaceBalls = new Movie('Space Balls', 5, true);
  Caddyshack = new Movie('Caddyshack', 5, true);
  ThreeAmigos = new Movie('Three Amigos', 4);
  Avengers = new Movie('Avengers', 3);
  Deadpool = new Movie('Deadpool', 5, true);
  obj: any;

  movies = [
    this.DavinciCode,
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

  tweet = {
    isLiked: false,
    likesCount: 10
  };

  onFavoriteChanged(eventArgs: RatingChangedEventArgs) {
    console.log(eventArgs.newRating + ' star(s)');
  }
}
