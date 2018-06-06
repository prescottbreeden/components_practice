import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;
  @Input('isLiked') isLiked: boolean;

  ngOnInit() {
    this.isActive = this.isLiked;
    this.likesCount += (this.isActive) ? 1 : 0;
  }

  onLike() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }
}
