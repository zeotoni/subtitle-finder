export interface Subtitle {
  fileId: number;
  language: string;
  release: string;
  downloads: number;
  hearingImpaired: boolean;
  trusted: boolean;
  autoTranslated: boolean;
}
