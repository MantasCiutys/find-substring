import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';
import { AbstractSubstring } from './abstractsubstring';

@Injectable({
  providedIn: 'root'
})
export class RabinKarpAlgorithmService extends AbstractSubstring implements IFindSubstring {

  private radixD = 10;
  private primeQ = 13;
  private p = 0;
  private t = 0;

  constructor() {
    super();
  }

  preProcessInputs(inputString: string, inputSubstring: string): void {
    this.startPreProcessingTime = performance.now();

    const stringLength: number = inputString.length;
    const substringLength: number = inputSubstring.length;

    for (let i = 0; i < substringLength; i++) {
      this.p = (this.radixD * this.p + Number(inputSubstring[i])) % this.primeQ;
      this.t = (this.radixD * this.t + Number(inputString[i])) % this.primeQ;
    }

    this.endPreProcessingTime = performance.now();
  }

  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    return true;
  }
}
