import { Subtitle } from '../models/subtitle';

export const SUBTITLES_MOCK: Subtitle[] = [
  {
    // release muito longo, sem espaços, com dois selos
    fileId: 6634101,
    release:
      'The.Lord.of.the.Rings.The.Fellowship.of.the.Ring.2001.Extended.Edition.2160p.UHD.BluRay.REMUX.HDR10.HEVC.TrueHD.7.1.Atmos-GROUPNAME',
    language: 'pt-BR',
    downloads: 3420,
    trusted: true,
    hearingImpaired: true,
    autoTranslated: false,
  },
  {
    // release curto e feio, sem selos
    fileId: 4681653,
    release: '2Matrix.Revolution',
    language: 'pt-BR',
    downloads: 679,
    trusted: false,
    hearingImpaired: false,
    autoTranslated: false,
  },
  {
    // só tradução automática
    fileId: 7102254,
    release: 'A.Quiet.Place.Day.One.2024.720p.WEB-DL.H264.AC3.5.1-GRUPO',
    language: 'pt-BR',
    downloads: 218,
    trusted: false,
    hearingImpaired: false,
    autoTranslated: true,
  },
  {
    // só confiável, muitos downloads
    fileId: 4681912,
    release: 'The.Matrix.Revolutions.2003.1080p.BluRay.H264.AAC-RARBG',
    language: 'pt-BR',
    downloads: 10807,
    trusted: true,
    hearingImpaired: false,
    autoTranslated: false,
  },
  {
    // só deficientes auditivos
    fileId: 5920877,
    release: 'Stranger.Things.S04E01.1080p.NF.WEB-DL.DDP5.1.x264-NTb',
    language: 'pt-BR',
    downloads: 1530,
    trusted: false,
    hearingImpaired: true,
    autoTranslated: false,
  },
  {
    // os três selos ao mesmo tempo
    fileId: 6310045,
    release: 'Spirited.Away.2001.1080p.BluRay.x264-HDChina',
    language: 'pt-BR',
    downloads: 845,
    trusted: true,
    hearingImpaired: true,
    autoTranslated: true,
  },
  {
    // outro idioma
    fileId: 6788231,
    release: 'Parasite.2019.1080p.BluRay.x264.DTS-HD.MA.5.1-FGT',
    language: 'en',
    downloads: 54210,
    trusted: true,
    hearingImpaired: false,
    autoTranslated: false,
  },
  {
    // zero downloads
    fileId: 7345002,
    release: 'Oppenheimer.2023.CAM.x264-NOGRP',
    language: 'es',
    downloads: 0,
    trusted: false,
    hearingImpaired: false,
    autoTranslated: false,
  },
  {
    // downloads altíssimos, para testar a largura do número
    fileId: 4012390,
    release: 'Avatar.2009.EXTENDED.1080p.BluRay.x264-CiNEFiLE',
    language: 'pt-BR',
    downloads: 1234567,
    trusted: true,
    hearingImpaired: false,
    autoTranslated: false,
  },
  {
    // release com espaços (quebra de linha comum)
    fileId: 6025518,
    release: 'Weathering With You (2019) 1080p BluRay x264 AAC5.1 [YTS MX]',
    language: 'pt-BR',
    downloads: 762,
    trusted: false,
    hearingImpaired: false,
    autoTranslated: false,
  },
];
