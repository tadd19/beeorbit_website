export type Language = 'ko' | 'en';

export type ProjectCategory = 'all' | 'logo' | 'game';

export interface Project {
  id: string;
  category: 'logo' | 'game';
  titleKo: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  client: string;
  year: string;
  tags: string[];
  featured: boolean;
  visualStyle: 'gold-geometric' | 'cyber-action' | 'minimal-luxury' | 'tactical-hex' | 'aerospace' | 'spatial-audio';
  stats: {
    labelKo: string;
    labelEn: string;
    value: string;
  }[];
  challengeKo: string;
  challengeEn: string;
  solutionKo: string;
  solutionEn: string;
  platforms?: string[];
  rating?: string;
  downloads?: string;
}

export interface Inquiry {
  id: string;
  clientName: string;
  email: string;
  company?: string;
  serviceType: 'logo' | 'game' | 'both' | 'consulting';
  budget: string;
  timeline: string;
  message: string;
  submittedAt: string;
  status: 'new' | 'reviewing' | 'contacted' | 'completed';
}

export interface AnnouncementPopup {
  enabled: boolean;
  titleKo: string;
  titleEn: string;
  contentKo: string;
  contentEn: string;
  badgeKo: string;
  badgeEn: string;
  linkTextKo: string;
  linkTextEn: string;
  linkUrl: string;
}

export interface CMSConfig {
  accentColor: string; // e.g. '#FFD700'
  accentRgb: string; // e.g. '255, 215, 0'
  studioName: string;
  heroSloganKo: string;
  heroSloganEn: string;
  heroSubtitleKo: string;
  heroSubtitleEn: string;
  contactEmail: string;
  contactPhone: string;
  studioAddressKo: string;
  studioAddressEn: string;
  instagramUrl: string;
  youtubeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
}

export interface SiteStats {
  totalVisitors: number;
  todayVisitors: number;
  inquiriesCount: number;
  portfolioCount: number;
}
