# Personal Academic Website

Welcome to my personal academic website! This is a modern, responsive portfolio website built with Next.js, designed specifically for academics, researchers, and professionals to showcase their work, publications, projects, and achievements.

## 🌟 Features

### Core Sections
- **Hero/About Section**: Introduction with profile image, bio, and social links
- **Featured Projects**: List-style project showcase with thumbnails, descriptions, and links
- **Technical Skills**: Display of technical expertise with chip-style badges
- **News & Updates**: Chronologically sorted news feed (latest first) with vertical scrolling
- **Research Experience**: Research projects with large thumbnails and detailed descriptions
- **Extracurricular Activities**: Leadership roles and activities with achievements
- **Publications**: Academic publications with toggle to show/hide (initially hidden)
- **Education & Experience**: Two-column layout showing education (with thesis) and job experience
- **Gallery Page**: Separate immersive gallery page with alternating layouts and full-screen modal view
- **GitHub Profile**: Compact GitHub stats, top languages, streak, and contribution graph
- **Contact Information**: Contact details with cards for phone, email, and address

### Design Features
- **Modern UI**: Inspired by VS Code's "Modern" and "Modern Dark" themes
- **Dark/Light Mode**: Seamless theme switching with persistent preference
- **Responsive Design**: Fully responsive layout that adapts to all screen sizes
- **Smooth Animations**: Fast, smooth transitions and hover effects
- **Teal/Cyan Color Palette**: Beautiful pastel teal/cyan/green theme for both light and dark modes
- **Compact Layout**: Efficient use of space with minimal scrolling required

### Navigation
- **Fixed Navigation Bar**: 
  - Left: Name (appears on scroll)
  - Center: Navigation tabs (HOME, PROJECTS, NEWS, RESEARCH, RESUME, CONTACT)
  - Right: Gallery link (separated) → Theme toggle → Download CV button → Mobile menu
- **Smooth Scrolling**: Automatic section highlighting as you scroll
- **Mobile Menu**: Collapsible menu with background overlay

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (optimized via Next.js)
- **State Management**: React Context API (for theme management)
- **Image Optimization**: Next.js Image component

## 📁 Project Structure

```
website/
├── public/                    # Static assets
│   ├── cv/                   # CV/Resume PDFs
│   ├── files/                # Project PDFs and documents
│   ├── gallery/              # Gallery images
│   ├── images/               # General images (profile, research thumbnails)
│   └── publications/         # Publication PDFs
│
├── src/
│   ├── components/           # React components
│   │   ├── sections/         # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Research.tsx
│   │   │   ├── ExtracurricularActivities.tsx
│   │   │   ├── Publications.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── ImmersiveGallery.tsx
│   │   │   ├── GitHubProfile.tsx
│   │   │   └── Contact.tsx
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   ├── Navbar.tsx        # Navigation bar
│   │   ├── Footer.tsx        # Footer component
│   │   └── ThemeToggle.tsx   # Theme switcher
│   │
│   ├── contexts/             # React contexts
│   │   └── ThemeContext.tsx  # Theme management
│   │
│   ├── data/                 # Content data
│   │   └── index.ts          # All website content
│   │
│   ├── pages/                # Next.js pages
│   │   ├── _app.tsx          # App wrapper with ThemeProvider
│   │   ├── _document.tsx     # Document structure
│   │   ├── index.tsx         # Home page
│   │   └── gallery.tsx       # Gallery page (separate route)
│   │
│   ├── styles/               # Global styles
│   │   └── globals.css       # CSS variables and global styles
│   │
│   └── types/                # TypeScript types
│       └── index.ts          # Type definitions
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository** (or use this as a template)
   ```bash
   git clone <your-repo-url>
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## ✏️ Customization Guide

### 1. Update Personal Information

Edit `src/data/index.ts` to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  phone: '+1234567890',
  address: 'Your Address',
  location: 'Your Location',
  bio: 'Your bio here...',
  profileImage: '/images/profile.png', // Place your image in public/images/
  socialLinks: [
    { platform: 'GitHub', url: 'https://github.com/yourusername', icon: '💻' },
    // Add more social links...
  ],
};
```

### 2. Add Projects

Add your projects to the `projects` array in `src/data/index.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['Tech1', 'Tech2'],
    githubUrl: 'https://github.com/...',
    imageUrl: '/images/project-thumbnail.jpg', // Optional
    pdfUrl: '/files/project-paper.pdf', // Optional
    presentationPdfUrl: '/files/presentation.pdf', // Optional
  },
  // Add more projects...
];
```

**Note**: Project images should be placed in `public/images/` and PDFs in `public/files/`.

### 3. Add Publications

Update the `publications` array:

```typescript
export const publications: Publication[] = [
  {
    id: '1',
    title: 'Publication Title',
    authors: 'Author 1, Author 2',
    venue: 'Conference/Journal Name',
    year: 2024,
    pdfUrl: '/publications/paper.pdf',
    doi: '10.xxxx/xxxxx', // Optional
    abstract: 'Abstract text...', // Optional
  },
];
```

Place PDF files in `public/publications/`.

### 4. Add News Items

Update the `news` array (sorted automatically by date, latest first):

```typescript
export const news: NewsItem[] = [
  {
    id: '1',
    title: 'News Title',
    description: 'News description...',
    date: '2024-01-15', // YYYY-MM-DD format
    category: 'Publication', // or 'Career', 'Achievement', etc.
    link: 'https://...', // Optional
  },
];
```

### 5. Add Extracurricular Activities

Update the `extracurricularActivities` array:

```typescript
export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: '1',
    title: 'Activity Title',
    organization: 'Organization Name',
    role: 'Role Title',
    period: '2022 – 2024',
    location: 'Location', // Optional
    description: 'Description of the activity...', // Optional
    technologies: ['Tech1', 'Tech2'], // Optional
    achievements: [ // Optional
      'Achievement 1',
      'Achievement 2',
    ],
    imageUrl: '/images/activity-thumbnail.jpg', // Optional
    link: 'https://...', // Optional
  },
];
```

### 6. Add Research Projects

Update the `research` array:

```typescript
export const research: ResearchItem[] = [
  {
    id: '1',
    title: 'Research Title',
    venue: 'Conference/Journal',
    technologies: ['Tech1', 'Tech2'],
    description: 'Research description...\nLine 2...\nLine 3...',
    imageUrl: '/images/research-thumbnail.jpg',
    link: 'https://...', // Optional
  },
];
```

### 7. Add Education & Experience

Update the `education` and `experience` arrays:

```typescript
export const education: Education[] = [
  {
    id: '1',
    degree: 'Degree Name',
    institution: 'Institution Name',
    location: 'Location',
    year: '2019 - 2024',
    description: 'Additional details...',
    thesis: { // Optional
      title: 'Thesis Title',
      description: 'Thesis description...',
      technologies: ['Tech1', 'Tech2'],
      supervisor: 'Supervisor Name, Title, Department',
    },
  },
];
```

export const experience: Experience[] = [
  {
    id: '1',
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Dec 2024 – Present',
    description: [
      'Responsibility 1',
      'Responsibility 2',
    ],
  },
];
```

### 8. Add Skills

Update the `skills` array:

```typescript
export const skills: Skill[] = [
  { id: '1', name: 'Skill Name', level: 90 },
  // Note: level is currently not displayed, but kept for future use
];
```

### 9. Configure Gallery

The gallery is now on a separate page at `/gallery` accessible via the navbar.

1. **Add images** to `public/gallery/` (e.g., `image1.jpg`, `image2.jpg`)

2. **Update the gallery items** in `src/data/index.ts` with all metadata:

```typescript
export const galleryItems: GalleryItem[] = [
  { 
    id: '1', 
    imageUrl: '/gallery/image1.jpg', 
    filename: 'image1.jpg',
    title: 'Image Title',
    alt: 'Alt text for accessibility',
    caption: 'Main caption',
    subCaption: 'Sub-caption or location',
    category: 'Category Name',
  },
];
```

**Note**: The gallery page features an immersive list layout with alternating image/description positions and full-screen modal view. Images are lazy-loaded for better performance.

### 10. Update CV

1. Place your CV PDF in `public/cv/`
2. Update the `cvUrl` in `src/data/index.ts`:

```typescript
export const cvUrl = '/cv/Your-CV-Name.pdf';
```

### 11. Customize GitHub Profile

Edit `src/components/sections/GitHubProfile.tsx` to update the GitHub username:

```typescript
// Replace 'TanvirTaaha' with your GitHub username in the image URLs
src="https://github-readme-stats.vercel.app/api?username=YOUR_USERNAME&..."
```

### 12. Customize Colors

Edit `src/styles/globals.css` to change the color palette:

```css
:root {
  --accent: #14b8a6;           /* Primary accent color */
  --accent-secondary: #2dd4bf; /* Secondary accent */
  --accent-hover: #0d9488;     /* Hover state */
  /* ... other colors ... */
}

.dark {
  /* Dark mode colors */
}
```

## 🎨 Theming

The website uses CSS variables for theming, making it easy to customize colors. The theme is managed through React Context and persists in localStorage.

### Theme Toggle
- Click the theme toggle button in the navigation bar
- Your preference is saved and will persist across sessions

### Color Scheme
- **Light Mode**: Clean white background with teal/cyan accents
- **Dark Mode**: Dark slate background with bright teal/cyan accents

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px (stacked layout, mobile menu)
- **Tablet**: 768px - 1024px (adjusted grid layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## 🔧 Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Add the section to `src/pages/index.tsx`
3. Add corresponding data types in `src/types/index.ts`
4. Add data in `src/data/index.ts`

### Modifying Navigation

Edit the `navItems` array in `src/components/Navbar.tsx`:

```typescript
const navItems = [
  { id: 'about', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS' },
  // Add more items...
];
```

Make sure the `id` matches the section's `id` attribute.

## 📄 File Organization

### Static Files
- **CV**: `public/cv/` - Resume/CV PDFs
- **Publications**: `public/publications/` - Publication PDFs
- **Project Files**: `public/files/` - Project-related PDFs and documents
- **Images**: `public/images/` - Profile pictures, research thumbnails, project images
- **Gallery**: `public/gallery/` - Gallery images (metadata stored in data file)

### Content Management
All content is centralized in `src/data/index.ts` for easy updates without touching component code.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Deploy to Other Platforms

The website can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Your own server (using `npm run build` and `npm start`)

## 📝 License

This project is open source and available for personal and academic use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you make improvements that could benefit others, pull requests are welcome!

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact information on the website.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
