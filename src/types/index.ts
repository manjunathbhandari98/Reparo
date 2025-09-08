import * as Icons from 'lucide-react';
import type { ReactElement } from 'react';

export type navs = {
  id: number;
  name: string;
  link: string;
};

export type reviews = {
  id: number;
  ratings: number;
  comment: string;
  user: {
    profile: string;
    name: string;
    city: string;
  };
};

export interface ServiceStep {
  id: number;
  title: string;
  description: string;
  points: string[];
}

export interface ReasonsToChoose {
  id: number;
  title: string;
  icon: ReactElement;
  desc: string;
}

// Create a type of all icon names from lucide-react
type IconName = keyof typeof Icons;

export interface SupportOption {
  id: number;
  title: string;
  description: string;
  icon: IconName;
  contact: string;
  availability: string;
  cta: string; // button text like "Contact Now"
  colour: string;
}
