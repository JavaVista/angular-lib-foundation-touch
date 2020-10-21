import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrls: ['./credit-card-input.component.scss']
})
export class CreditCardInputComponent {
  @Input() creditCardNumber: string = '';
  private _readOnly: boolean = false;
  get isReadOnly() {
    return this._readOnly;
  }
  @Input() set isReadOnly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadOnlyCreditCardNumber(this.creditCardNumber) : this.creditCardNumber;
    this._readOnly = value;
  }

  private formatReadOnlyCreditCardNumber(creditCardNumber: string): string {
    const stringParts = creditCardNumber.match(/[\s\S]{1,4}/g) || [];
    const onlyLastFourDigitShown = stringParts.map((part, index) => {
      if (index === stringParts.length - 1) {
        return part
      }
      return 'xxxx'
    });
    return onlyLastFourDigitShown.join('-')
  }

}
