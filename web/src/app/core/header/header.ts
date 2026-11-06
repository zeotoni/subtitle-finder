import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  toggleTheme() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute('data-theme');

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const isDark = currentTheme ? currentTheme === 'dark' : systemPrefersDark;

    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
}
