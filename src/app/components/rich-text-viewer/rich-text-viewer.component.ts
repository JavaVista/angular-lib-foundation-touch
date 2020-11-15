import { Component, Input, OnInit } from '@angular/core';
import { htmlRegex } from './html-regex.data';

@Component({
  selector: 'app-rich-text-viewer',
  templateUrl: './rich-text-viewer.component.html',
  styleUrls: ['./rich-text-viewer.component.scss']
})
export class RichTextViewerComponent {
  validHtml: string = '';

  @Input() set htmlText(value: string) {
    const html = this._parseNonEmptyHtml(value);
    const isValidHtml = htmlRegex.test(html);
    this.validHtml = isValidHtml ? html : '';
  }

  private _parseNonEmptyHtml(html: string = '') {
    const htmlTags: RegExp = /<[^]*?>/g; // check opening & closing tags
    const hasContent: boolean = html.replace(htmlTags, '').trim().length > 0;
    return hasContent ? html : '';
  }

}
