import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-twitter-post',
  templateUrl: './twitter-post.component.html',
  styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent {
  @Input() baseHref = 'https://clever-noether-d537c0.netlify.app/';
  @Input() hastTags: string[] = ['dev', 'javascript', 'typescript', 'angular', 'tech']

  constructor(public titleService: Title) { }

  get twitterUrl(): string {
    const base = this.getBaseWithHashTagsRoute();
    const message = encodeURIComponent(`~"Actions speak louder than words; let your words teach and your actions speak." -quote. Practicing a little bit of Angular at my own ${this.titleService.getTitle()} to become a little more proficient`);
    return `${base}${message}`;
  }

  private getBaseWithHashTagsRoute() {
    const route = encodeURI(this.baseHref);
    const hashTags = this.hastTags.join(',');
    return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=seetechnologic&url=${route}`;
  }

}
