import { Component, OnInit, Input } from '@angular/core';
import { DefaultSubstringFinderService } from '../default-substring-finder.service';
import { RabinKarpAlgorithmService } from '../rabin-karp-algorithm.service';
import { NaiveSubstringService } from '../naive-substring.service';

@Component({
  selector: 'app-input-texts',
  templateUrl: './input-texts.component.html',
  styleUrls: ['./input-texts.component.css']
})
export class InputTextsComponent implements OnInit {

  inputString: string;
  inputSubstring: string;

  constructor(private defaultSubstringFinderService: DefaultSubstringFinderService,
              private rabinKarpAlgorithmService: RabinKarpAlgorithmService,
              private naiveService: NaiveSubstringService) { }

  ngOnInit() {
  }

  executeAllSubstringMethods(): void {
    // reset details
    this.resetAll();

    // execute default
    this.defaultSubstringFinderService.preProcessInputs(this.inputString, this.inputSubstring);
    this.defaultSubstringFinderService.isSubstringFound(this.inputString, this.inputSubstring);

    // execute Rabin Karp
    this.rabinKarpAlgorithmService.preProcessInputs(this.inputString, this.inputSubstring);

    // execute Naive approach
    this.naiveService.isSubstringFound(this.inputString, this.inputSubstring);
  }

  resetAll(): void {
    this.defaultSubstringFinderService.reset();
    this.rabinKarpAlgorithmService.reset();
    this.naiveService.reset();
  }
}
