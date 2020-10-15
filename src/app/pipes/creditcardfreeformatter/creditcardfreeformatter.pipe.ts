import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditcardfreeformatter'
})
export class CreditcardfreeformatterPipe implements PipeTransform {

  transform(cardNumber: string): string {
    if (!this.hasCorrectLength(cardNumber)) {
      return 'Invalid Card Number Length!';
    } else if (!this.isAllNumbers(cardNumber)) {
      return 'Invalid Characters!';
    }
    return this.formatCardNumber(cardNumber);
  }

  formatCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g);
    return parts.join('-')
  }

  isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const totalValidCharacters = cardNumber.split('').filter(character => stringNumbers.includes(character)).length;

    return totalValidCharacters === cardNumber.length;
  }

  hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;

    if (cardNumberLength === isAmericanExpressCardLength || cardNumberLength === isMasterDiscoverVisaCardLength) {
      return true;
    }
    return false;
  }

}
