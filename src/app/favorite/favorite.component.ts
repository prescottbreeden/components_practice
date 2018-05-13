import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Output() change = new EventEmitter();
  numStars: number;
  oneStar: boolean;
  twoStar: boolean;
  threeStar: boolean;
  fourStar: boolean;
  fiveStar: boolean;

  constructor() { }

  ngOnInit() {
  }

  toggleFavorite($event) {
    console.log($event);
    this.numStars = Number($event.target.attributes.value.value);
    this.oneStar = (1 <= this.numStars);
    this.twoStar = (2 <= this.numStars);
    this.threeStar = (3 <= this.numStars);
    this.fourStar = (4 <= this.numStars);
    this.fiveStar = (5 <= this.numStars);
    this.change.emit({ newRating: this.numStars });
  }
}
export interface RatingChangedEventArgs {
  newRating: number;
}
