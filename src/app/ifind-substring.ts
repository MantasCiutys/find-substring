export interface IFindSubstring {
  // returns time taken to pre-process inputs
  preProcessInputs(inputString: string, inputSubstring: string): number;

  // returns if substring is available
  isSubstringFound(inputString: string, inputSubstring: string): boolean;

  // returns time taken to find substring
  getSubstringFindTime(): number;
}
