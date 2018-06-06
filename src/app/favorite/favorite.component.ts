import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() initStars: number;

  @Output() change = new EventEmitter();
  numStars: number;
  oneStar: boolean;
  twoStar: boolean;
  threeStar: boolean;
  fourStar: boolean;
  fiveStar: boolean;

  constructor() { }

  ngOnInit() {
    this.changeStars(this.initStars);

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

  changeStars(rating) {
    this.oneStar = (1 <= rating);
    this.twoStar = (2 <= rating);
    this.threeStar = (3 <= rating);
    this.fourStar = (4 <= rating);
    this.fiveStar = (5 <= rating);
  }
}
export interface RatingChangedEventArgs {
  newRating: number;
}
