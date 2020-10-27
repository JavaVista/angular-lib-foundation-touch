import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './models/loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() loaderType: LoaderType = LoaderType.Circular;
  aLoaderType = LoaderType; //cannot reference enum. This is a wrapper.
  private loading: string = 'Loading'
  private loadingDots: string = '.\0\0'

  ngOnInit(): void {
    if (this.loaderType === LoaderType.Loading) {
      this.updateLoadingDots();
    }
  }

  get loadingText(): string {
    return `${this.loading}${this.loadingDots}`
  }

  private updateLoadingDots() {
    let currentDot = 0;

    setInterval(() => {
      switch (currentDot % 3) {
        case 0:
          this.loadingDots = '..\0';
          currentDot++;
          break;
        case 1:
          this.loadingDots = '...';
          currentDot++;
          break;
        case 2:
          this.loadingDots = '.\0\0';
          currentDot = 0;
          break;
      }
    }, 500);
  }


}
