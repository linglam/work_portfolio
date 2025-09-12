
import type React from 'react';

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
}

export interface Skill {
  name: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}