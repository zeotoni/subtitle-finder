import { Component, signal } from '@angular/core';
import { SearchForm } from './search-form/search-form';
import { SearchRequest } from './search-request';

@Component({
  selector: 'app-search',
  imports: [SearchForm],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  protected readonly request = signal<SearchRequest | null>(null);

  protected onSearched(req: SearchRequest) {
    this.request.set(req);
  }
}
