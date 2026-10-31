import { Component, computed, ElementRef, output, signal, viewChild } from '@angular/core';
import { SearchRequest } from '../search-request';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.html',
  styleUrl: './search-form.scss',
})
export class SearchForm {
  readonly searched = output<SearchRequest>();

  protected readonly query = signal('');

  private readonly fileInput = viewChild.required<ElementRef<HTMLInputElement>>('fileInput');

  protected readonly file = signal<File | null>(null);

  protected readonly name = computed(() => this.file()?.name);

  protected readonly extension = computed(() => {
    const name = this.name();
    if (!name) return '';

    const dot = name.lastIndexOf('.');
    return dot > 0 ? name?.slice(dot + 1).toUpperCase() : '';
  });

  protected readonly size = computed(() => {
    const bytes = this.file()?.size ?? 0;
    return bytes >= 1e9 ? `${(bytes / 1e9).toFixed(1)} GB` : `${Math.round(bytes / 1e6)} MB`;
  });

  protected onFileSelected($event: Event) {
    const input = $event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;

    this.file.set(file);

    if (file) {
      this.query.set('');
      this.searched.emit({ type: 'file', file });
    }
  }

  protected onQueryInput($event: Event) {
    this.query.set(($event.target as HTMLInputElement).value);
  }

  protected resetSelection() {
    const input = this.fileInput().nativeElement;
    input.focus();
    this.clearSelection();
  }

  protected clearSelection() {
    const input = this.fileInput().nativeElement;
    input.value = '';
    this.file.set(null);
  }

  protected onSubmit($event: Event) {
    $event.preventDefault();
    const title = this.query().trim();
    if (!title) return;

    this.clearSelection();
    this.searched.emit({ type: 'title', title });
  }
}
