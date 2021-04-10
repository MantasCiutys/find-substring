import { Component, OnInit } from '@angular/core';
import { DefaultSubstringFinderService } from '../default-substring-finder.service';
import { RabinKarpAlgorithmService } from '../rabin-karp-algorithm.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private defaultSubstringFinderService: DefaultSubstringFinderService,
              private rabinKarpSubstringService: RabinKarpAlgorithmService) { }

  ngOnInit() {
  }
  // Default methods
  getDefaultProcessingTime(): number {
    return this.defaultSubstringFinderService.getSubstringFindTime();
  }

  getDefaultPreProcessingTime(): number {
    return this.defaultSubstringFinderService.getPreProcessSubstringTime();
  }

  getDefaultTotalTime(): number {
    return this.defaultSubstringFinderService.getTotalTime();
  }

  getDefaultIsFound(): string {
    return this.defaultSubstringFinderService.getIsFound() ? 'YES' : 'NO';
  }

  // Rabin Karp methods
  getRabinKarpProcessingTime(): number {
    return this.rabinKarpSubstringService.getSubstringFindTime();
  }

  getRabinKarpPreprocessingTime(): number {
    return this.rabinKarpSubstringService.getPreProcessSubstringTime();
  }

  getRabinKarpTotalTime(): number {
    return this.rabinKarpSubstringService.getTotalTime();
  }

  getRabinKarpIsFound(): string {
    return this.rabinKarpSubstringService.getIsFound() ? 'YES' : 'NO';
  }
}
