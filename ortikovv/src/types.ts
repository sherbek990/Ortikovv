/**
 * Types for the Chronos Gallery
 */

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  size: 'small' | 'medium' | 'large' | 'tall' | 'wide';
  description: string;
}

export interface NavigationLinks {
  label: string;
  href: string;
}
