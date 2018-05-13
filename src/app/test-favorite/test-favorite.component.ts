import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-favorite',
  templateUrl: './test-favorite.component.html',
  styleUrls: ['./test-favorite.component.css']
})
export class TestFavoriteComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
@Input('isFavorite') isSelected: boolean;
@Output() change = new EventEmitter();

constructor() { }

  ngOnInit() {
  }

  toggleFavorite() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected });
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
