import { Component, computed, signal } from '@angular/core';
import { SUBTITLES_MOCK } from '../../mock/subtitles.mock';
import { ResultsList } from './results-list/results-list';
import { SearchForm } from './search-form/search-form';
import { SearchRequest } from './search-request';

@Component({
  selector: 'app-search',
  imports: [SearchForm, ResultsList],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  protected readonly request = signal<SearchRequest | null>(null);

  protected readonly cards = SUBTITLES_MOCK;

  protected onSearched(req: SearchRequest) {
    this.request.set(req);
  }

  protected readonly searchTerm = computed(() => {
    const req = this.request();
    if (!req) return '';
    return req.type === 'title' ? req.title : req.file.name;
  });
}
