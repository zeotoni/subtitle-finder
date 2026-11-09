import { Component } from '@angular/core';
import { getNextTheme } from '../theme-utils';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  toggleTheme() {
    const root = document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    root.setAttribute(
      'data-theme',
      getNextTheme(root.getAttribute('data-theme'), systemPrefersDark),
    );
  }
}
