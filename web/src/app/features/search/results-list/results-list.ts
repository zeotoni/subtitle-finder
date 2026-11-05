import { Component, input } from '@angular/core';
import { Subtitle } from './../../../models/subtitle';
import { SubtitleCard } from './subtitle-card/subtitle-card';

@Component({
  selector: 'app-results-list',
  imports: [SubtitleCard],
  templateUrl: './results-list.html',
  styleUrl: './results-list.scss',
})
export class ResultsList {
  searchTerm = input('');
  subtitleCards = input.required<Subtitle[]>();
}
