import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linkedin-post',
  templateUrl: './linkedin-post.component.html',
  styleUrls: ['./linkedin-post.component.scss']
})
export class LinkedinPostComponent {

  constructor(public router: Router) { }

  get linkeInMessage(): string {
    const base = 'https://www.linkedin.com/shareArticle?mini=true';
    const currentSite = `&url=https://clever-noether-d537c0.netlify.app${this.router.url}`

    return `${base}${currentSite}`
  }

}
