import {
  Wrench,
  ShoppingCart,
  BookOpen,
  Scissors,
  Truck,
  Laptop,
  Home,
  Leaf,
} from 'lucide-react';
import type { Task } from '../types/services';

export const services: Task[] = [
  {
    id: 'repairs',
    name: 'Home Repairs',
    icon: Wrench,
    searchWords: [
      {
        name: 'Plumber',
        keywords: ['blocked', 'drains', 'leaks'],
      },
      {
        name: 'Electrician',
        keywords: ['wiring', 'outlets', 'switches'],
      },
      {
        name: 'Handyman',
        keywords: ['general fixes'],
      },
      {
        name: 'Appliance Repair',
        keywords: ['fridge', 'stove', 'washing machine'],
      },
    ]
  },
  {
    id: 'cleaning',
    name: 'Cleaning',
    icon: Home,
    searchWords: [
      {
        name: 'House Cleaning',
        keywords: ['general'],
      },
      {
        name: 'Deep cleaning',
        keywords: ['move-in/out', 'post-construction'],
      },
      {
        name: 'Laundry & Ironing',
        keywords: ['clothes', 'ironing'],
      },
      {
        name: 'Office cleaning',
        keywords: ['commercial'],
      },
    ]
  },
  {
    id: 'outdoors',
    name: 'Outdoors',
    icon: Leaf,
    searchWords: [
      {
        name: 'Garden services',
        keywords: [],
      },
      {
        name: 'Lawn mowing',
        keywords: [],
      },
      {
        name: 'Tree cutting',
        keywords: [],
      },
      {
        name: 'Yard cleanup',
        keywords: [],
      },
      {
        name: 'Pool cleaning',
        keywords: [],
      },
    ]
  },
  {
    id: 'personal',
    name: 'Personal Services',
    icon: Scissors,
    searchWords: [
      {
        name: 'Mobile barber',
        keywords: [],
      },
      {
        name: 'Hair braiding',
        keywords: ['braids', 'cornrows', 'styling'],
      },
      {
        name: 'Nail technician',
        keywords: ['nails', 'manicure', 'pedicure'],
      },
      {
        name: 'Makeup artist',
        keywords: ['makeup', 'special occasions'],
      },
      {
        name: 'Massage therapist',
        keywords: ['massage', 'relaxation'],
      },
    ]
  },
  {
    id: 'moving',
    name: 'Moving',
    icon: Truck,
    searchWords: [
      {
        name: 'Small moves',
        keywords: ['student apartments', 'local moves'],
      },
      {
        name: 'Furniture delivery',
        keywords: [],
      },
      {
        name: 'Man with a van',
        keywords: [],
      },
      {
        name: 'Local courier',
        keywords: ['same-day delivery', 'package transport'],
      },
    ]
  },
  {
    id: 'digital',
    name: 'Digital Services',
    icon: Laptop,
    searchWords: [
      {
        name: 'Laptop repair',
        keywords: ['computer', 'screen', 'battery'],
      },
      {
        name: 'Phone repair',
        keywords: ['mobile', 'smartphone', 'tablet'],
      },
      {
        name: 'WiFi installation',
        keywords: ['network', 'router', 'connectivity'],
      },
      {
        name: 'Website creation',
        keywords: ['web design', 'development'],
      },
    ]
  },
  {
    id: 'academic',
    name: 'Academic Help',
    icon: BookOpen,
    searchWords: [
      {
        name: 'Tutoring',
        keywords: ['math', 'science', 'coding'],
      },
      {
        name: 'Assignment help',
        keywords: ['essays', 'homework', 'projects'],
      },
      {
        name: 'CV writing',
        keywords: ['resume', 'cover letter'],
      },
      {
        name: 'Exam prep',
        keywords: ['tests', 'exams'],
      },
      {
        name: 'Tertiary application',
        keywords: ['universities', 'colleges', 'admissions'],
      },
    ]
  },
  {
    id: 'errands',
    name: 'Errands',
    icon: ShoppingCart,
    searchWords: [
      {
        name: 'Grocery shopping',
        keywords: [],
      },
      {
        name: 'Queue shopping',
        keywords: [],
      },
      {
        name: 'Parcel Pickup/drop-off',
        keywords: ['local courier'],
      },
      {
        name: 'Personal assistant tasks',
        keywords: [],
      },
    ]
  },
];

// sidebar 

 export const availability = [
    {
      id: crypto.randomUUID(),
      name: 'Anytime',
    },
    {
      id: crypto.randomUUID(),
      name: 'Today',
    },
    {
      id: crypto.randomUUID(),
      name: 'This Week'
    }
  ]
