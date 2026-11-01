import { Component, computed, ElementRef, output, signal, viewChild } from '@angular/core';
import { formatSize, getExtension } from '../file-utils';
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

  protected readonly extension = computed(() => getExtension(this.name() ?? ''));

  protected readonly size = computed(() => formatSize(this.file()?.size ?? 0));

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
