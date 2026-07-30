import type { LucideIcon } from 'lucide-react';

export type Category =
  | 'errands'
  | 'academic'
  | 'digital'
  | 'moving'
  | 'personal'
  | 'outdoors'
  | 'cleaning'
  | 'repairs';

export type Task = {
  id: Category;
  name: string;
  icon: LucideIcon;
  searchWords: {
    name: string;
    keywords: string[];
  }[];
};
