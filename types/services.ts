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
  icon: any;
  searchWords: {
    name: string;
    keywords: string[];
  }[];
};
