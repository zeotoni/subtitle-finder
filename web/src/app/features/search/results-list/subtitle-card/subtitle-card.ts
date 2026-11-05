import { Component, input } from '@angular/core';
import { Subtitle } from '../../../../models/subtitle';

@Component({
  selector: 'app-subtitle-card',
  imports: [],
  templateUrl: './subtitle-card.html',
  styleUrl: './subtitle-card.scss',
})
export class SubtitleCard {
  subtitleInfo = input.required<Subtitle>();
}
