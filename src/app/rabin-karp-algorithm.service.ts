import { Injectable } from '@angular/core';
import { IFindSubstring } from './ifind-substring';

@Injectable({
  providedIn: 'root'
})
export class RabinKarpAlgorithmService implements IFindSubstring {

  private startProcessTime: number;
  private endProcessTime: number;
  private startPreProcessTime: number;
  private endPreProcessTime: number;
  private isFound: boolean;

  // variables specific for this algorithm only
  private radixD = 10;
  private primeQ = 13;
  private p = 0;
  private t = 0;

  constructor() { }

  preProcessInputs(inputString: string, inputSubstring: string): void {
    this.startPreProcessTime = performance.now();

    const stringLength: number = inputString.length;
    const substringLength: number = inputSubstring.length;

    for (let i = 0; i < substringLength; i++) {
      this.p = (this.radixD * this.p + Number(inputSubstring[i])) % this.primeQ;
      this.t = (this.radixD * this.t + Number(inputString[i])) % this.primeQ;
    }

    this.endPreProcessTime = performance.now();
  }
  isSubstringFound(inputString: string, inputSubstring: string): boolean {
    return true;
  }
  getSubstringFindTime(): number {
    return this.endProcessTime - this.startProcessTime;
  }
  getPreProcessSubstringTime(): number {
    return this.endPreProcessTime - this.startPreProcessTime;
  }

  getTotalTime(): number {
    return this.getPreProcessSubstringTime() + this.getSubstringFindTime();
  }

  getIsFound(): boolean {
    return this.isFound;
  }
}
