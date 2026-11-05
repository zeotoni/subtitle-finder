import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Subtitle } from '../../../../models/subtitle';
import { SubtitleCard } from './subtitle-card';

const SUBTITLE: Subtitle = {
  fileId: 1,
  release: 'The.Matrix.Revolutions.2003.1080p.BluRay.H264.AAC-RARBG',
  language: 'pt-BR',
  downloads: 10807,
  trusted: false,
  hearingImpaired: false,
  autoTranslated: false,
};

describe('SubtitleCard', () => {
  let fixture: ComponentFixture<SubtitleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubtitleCard],
    }).compileComponents();

    fixture = TestBed.createComponent(SubtitleCard);
    fixture.componentRef.setInput('subtitleInfo', SUBTITLE);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
