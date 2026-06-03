export type ActivePage = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'cocktails' | 'specials';
  tags: string[];
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  location: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ambiance' | 'dishes' | 'heritage';
  image: string;
  description: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image: string;
}
