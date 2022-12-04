import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Ho } from '../ho';
import { HoService } from '../ho.service';

@Component({
  selector: 'app-ho-search',
  templateUrl: './ho-search.component.html',
  styleUrls: ['./ho-search.component.scss']
})
export class HoSearchComponent implements OnInit {
  hos$!: Observable<Ho[]>;
  private searchTerms = new Subject<string>();

  constructor(private hoService: HoService) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.hos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.hoService.searchHos(term)),
    );
  }
}