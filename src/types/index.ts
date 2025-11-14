import React from 'react';

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  pdfUrl?: string;
  doi?: string;
  abstract?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  pdfUrl?: string;
  presentationPdfUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone?: string;
  address?: string;
  location?: string;
  bio: string | React.ReactNode;
  profileImage: string;
  socialLinks: SocialLink[];
}

export interface Stat {
  id: string;
  value: string;
  label: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image?: string;
  rating: number;
  text: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  filename: string;
  title?: string;
  alt?: string;
  caption?: string;
  subCaption?: string;
  category?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  link?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  description?: string;
  venue?: string | React.ReactNode;
  technologies?: string[];
  link?: string;
  imageUrl?: string;
}

