import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  // tslint:disable-next-line:no-input-rename
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onLike() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
