import { Component, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // @Output() newThemeEvent = new EventEmitter<string>();
  newTheme = output<string>();

  theme: 'dark' | 'light' = 'light';

  toggleTheme() {
    if (this.theme == 'dark') {
      this.theme = 'light';
      this.newTheme.emit('light');
    } else {
      this.theme = 'dark';
      this.newTheme.emit('dark');
    }
  }
}
