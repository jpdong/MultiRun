import { homeCopy } from '../i18n/home/en';

export const GOOGLE_PLAY_DOWNLOAD_URL =
  'https://play.google.com/store/apps/details?id=com.dong.multirun';

export const featureImages = [
  '/multi_run_1.webp',
  '/multi_run_2.webp',
  '/multi_run_3.webp',
  '/multi_run_4.webp',
] as const;

export const testimonialProfiles = [
  { avatar: '/avatars/alex.jpg', name: 'Alex' },
  { avatar: '/avatars/linda.jpg', name: 'Linda' },
  { avatar: '/avatars/sam.jpg', name: 'Sam' },
  { avatar: '/avatars/emily.jpg', name: 'Emily' },
] as const;

export type HomeBadge = {
  name: string;
  href: string;
  src: string;
  alt: string;
  width: number;
  height?: number;
};

export const homeBadges: HomeBadge[] = [
  {
    name: 'Fazier',
    href: 'https://fazier.com/launches/multirun.space',
    src: 'https://fazier.com/api/v1//public/badges/launch_badges.svg?badge_type=launched&theme=neutral',
    alt: 'Fazier badge',
    width: 120,
  },
  {
    name: 'Startup Fame',
    href: 'https://startupfa.me/s/multi-run?utm_source=multirun.space',
    src: 'https://startupfa.me/badges/featured-badge.webp',
    alt: 'Multi Run - Featured on Startup Fame',
    width: 171,
    height: 54,
  },
  {
    name: 'Twelve Tools',
    href: 'https://twelve.tools',
    src: 'https://twelve.tools/badge3-white.svg',
    alt: 'Featured on Twelve Tools',
    width: 148,
    height: 40,
  },
];

export const features = homeCopy.features.items.map((item, index) => ({
  img: featureImages[index],
  ...item,
}));

export const faqs = homeCopy.faq.items;

export const testimonials = homeCopy.testimonials.items.map((item, index) => ({
  ...testimonialProfiles[index],
  text: item.text,
}));
