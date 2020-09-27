import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent {
  @Input() rating: number = 5;
  private readonly highestRating: number = 5;

  constructor() { }

  get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);
    return Array(totalFullStars).fill(0);
  }

  get halfStars(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) > 0.5) && this.rating !== this.highestRating;
    return hasHalfStar;
  }

  get emptyStars(): number[] {
    const totalEmptyStars = Math.floor(this.highestRating - this.rating);
    return Array(totalEmptyStars).fill(0);
  }

}
