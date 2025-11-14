# Website Structure

This document provides a detailed overview of the project structure and how to customize each component.

## Directory Organization

### Public Assets (`/public/`)

```
public/
├── cv/                      # CV/Resume PDF files
│   └── CV-Tanvir Hossain Taaha.pdf
├── files/                   # Project-related PDFs and documents
│   ├── trash-sorting-paper.pdf
│   └── trash-sorting-presentation.pdf
├── gallery/                 # Gallery images
│   ├── image1.jpg
│   └── image2.jpg
├── images/                  # General images
│   ├── profile.png          # Profile picture for Hero section
│   └── research-thumbnail.jpg
└── publications/            # Publication PDF files
    ├── paper1.pdf
    └── paper2.pdf
```

### Source Code (`/src/`)

```
src/
├── components/              # React components
│   ├── sections/           # Page section components
│   │   ├── Hero.tsx        # Landing/About section
│   │   ├── Projects.tsx    # Featured projects list
│   │   ├── Skills.tsx      # Technical expertise
│   │   ├── News.tsx        # News & updates feed
│   │   ├── Research.tsx    # Research experience
│   │   ├── ExtracurricularActivities.tsx # Extracurricular activities
│   │   ├── Publications.tsx # Academic publications (with toggle)
│   │   ├── Education.tsx   # Education & job experience
│   │   ├── ImmersiveGallery.tsx # Gallery page component (immersive list layout)
│   │   ├── GitHubProfile.tsx # GitHub stats and contribution graph
│   │   └── Contact.tsx     # Contact information
│   ├── Layout.tsx          # Main layout wrapper (Navbar + Footer)
│   ├── Navbar.tsx          # Top navigation bar
│   ├── Footer.tsx          # Footer with social links
│   └── ThemeToggle.tsx     # Dark/light mode toggle button
│
├── contexts/               # React contexts
│   └── ThemeContext.tsx    # Theme management (light/dark mode)
│
├── data/                   # Content data (centralized)
│   └── index.ts            # All website content (personal info, projects, etc.)
│
├── pages/                  # Next.js pages
│   ├── _app.tsx            # App wrapper with ThemeProvider
│   ├── _document.tsx       # Document structure
│   ├── index.tsx           # Home page (renders all sections)
│   └── gallery.tsx         # Gallery page (separate route)
│
├── styles/                 # Global styles
│   └── globals.css         # CSS variables, theme colors, global styles
│
└── types/                  # TypeScript type definitions
    └── index.ts            # All TypeScript interfaces
```

## Component Structure

### Layout Components

- **`Layout.tsx`**: Main wrapper that includes Navbar and Footer around all page content
- **`Navbar.tsx`**: Fixed top navigation bar with:
  - Left: Name (appears on scroll)
  - Center: Navigation tabs (HOME, PROJECTS, NEWS, RESEARCH, RESUME, CONTACT)
  - Right: Gallery link (separated) → Theme toggle → Download CV button → Mobile menu
- **`Footer.tsx`**: Footer with copyright and social media links with icons
- **`ThemeToggle.tsx`**: Button to switch between light and dark themes

### Section Components

1. **`Hero.tsx`** (`id="about"`)
   - Profile image, name, title, bio
   - Social media links with icons
   - Landing section of the website

2. **`Projects.tsx`** (`id="projects"`)
   - List-style layout with thumbnail images on the left
   - Project title, description, technologies
   - Links: GitHub, PDF, Presentation PDF
   - Responsive: stacks vertically on mobile

3. **`Skills.tsx`** (`id="skills"`)
   - Chip-style badges for technical skills
   - Displays all skills from data

4. **`News.tsx`** (`id="news"`)
   - Vertical scrolling news feed
   - Automatically sorted by date (latest first)
   - Category badges and formatted dates

5. **`Research.tsx`** (`id="research"`)
   - Large thumbnail image on left, details on right
   - Research title, venue, technologies, description
   - Responsive: stacks vertically on mobile

6. **`ExtracurricularActivities.tsx`** (`id="extracurricular"`)
   - Large thumbnail image on left, details on right
   - Activity title, role, organization, period, location
   - Description, achievements, technologies
   - Responsive: stacks vertically on mobile

7. **`Publications.tsx`** (`id="publications"`)
   - Toggle to show/hide publications (initially hidden)
   - Publication cards with title, authors, venue, year
   - Optional: DOI, abstract, PDF link

8. **`Education.tsx`** (`id="education"`)
   - Two-column layout: Education | Job Experience
   - Education: degree, institution, location, year, description
   - Thesis: title, description, supervisor, technologies (displayed under degree)
   - Experience: title, company, location, period, responsibilities

9. **`ImmersiveGallery.tsx`** (Gallery Page Component)
   - Separate gallery page with immersive list layout
   - Alternating image/description layout (left-right, right-left)
   - Full-screen modal view for images
   - Lazy loading for performance
   - Metadata stored directly in `galleryItems` array in data file

10. **`GitHubProfile.tsx`** (`id="github"`)
   - GitHub stats, top languages, streak stats
   - Contribution graph (GitHub-colored)
   - Link to full GitHub profile
   - GitHub-inspired dark background

11. **`Contact.tsx`** (`id="contact"`)
    - Contact information cards
    - Phone, Email, Address
    - No contact form (information only)

## Data Structure

All content is centralized in `/src/data/index.ts`:

- `personalInfo`: Name, title, email, phone, address, bio, profile image, social links
- `education`: Education history (with optional thesis information)
- `experience`: Job experience
- `projects`: Featured projects with thumbnails, descriptions, links
- `publications`: Academic publications
- `skills`: Technical skills
- `news`: News items (sorted by date)
- `research`: Research projects
- `extracurricularActivities`: Extracurricular activities and leadership roles
- `galleryItems`: Gallery image references
- `cvUrl`: Path to CV PDF

## How to Customize

### 1. Update Personal Information

Edit `/src/data/index.ts` → `personalInfo`:
- Name, title, email, phone, address, location
- Bio text
- Profile image path (`/images/profile.png`)
- Social links (GitHub, LinkedIn, Twitter/X, Email, Website)

### 2. Add/Update Projects

Edit `/src/data/index.ts` → `projects` array:
- Add project objects with: id, title, description, technologies
- Optional: `imageUrl`, `githubUrl`, `pdfUrl`, `presentationPdfUrl`
- Place project images in `/public/images/`
- Place PDFs in `/public/files/`

**Project Layout**: Projects display in a list with thumbnails on the left side.

### 3. Add/Update Publications

1. Add PDF files to `/public/publications/`
2. Edit `/src/data/index.ts` → `publications` array:
   - Title, authors, venue, year
   - Optional: `pdfUrl`, `doi`, `abstract`

**Note**: Publications section is hidden by default with a toggle button.

### 4. Add/Update News Items

Edit `/src/data/index.ts` → `news` array:
- Title, description, date (YYYY-MM-DD format), category
- Optional: `link`
- Automatically sorted by date (latest first)

### 5. Add/Update Research Projects

Edit `/src/data/index.ts` → `research` array:
- Title, venue, technologies, description
- Optional: `imageUrl`, `link`
- Place research thumbnails in `/public/images/`

### 6. Add/Update Extracurricular Activities

Edit `/src/data/index.ts` → `extracurricularActivities` array:
- Title, organization, role, period, location
- Optional: `description`, `achievements` (array), `technologies`, `imageUrl`, `link`
- Place activity images in `/public/images/`

**Example**:
```typescript
export const extracurricularActivities: ExtracurricularActivity[] = [
  {
    id: '1',
    title: 'Team Name',
    organization: 'Organization Name',
    role: 'Role Title',
    period: '2022 – 2024',
    location: 'Location',
    description: 'Description of the activity...',
    technologies: ['Tech1', 'Tech2'],
    achievements: [
      'Achievement 1',
      'Achievement 2',
    ],
    link: 'https://...',
  },
];
```

### 7. Update Education & Experience

Edit `/src/data/index.ts`:
- `education` array: degree, institution, location, year, description
- Optional `thesis` object: title, description, supervisor, technologies
- `experience` array: title, company, location, period, description (array of responsibilities)

**Education with Thesis Example**:
```typescript
export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Science',
    institution: 'University Name',
    location: 'Location',
    year: '2019 - 2024',
    description: 'CGPA: 3.02/4.00',
    thesis: {
      title: 'Thesis Title',
      description: 'Thesis description...',
      technologies: ['Tech1', 'Tech2'],
      supervisor: 'Supervisor Name, Title, Department',
    },
  },
];
```

### 8. Update Skills

Edit `/src/data/index.ts` → `skills` array:
- Skill name (level is stored but not currently displayed)

### 9. Configure Gallery

The gallery is now on a separate page at `/gallery` accessible via the navbar.

1. **Add images** to `/public/gallery/` (e.g., `image1.jpg`, `image2.jpg`)

2. **Update gallery items** in `/src/data/index.ts` → `galleryItems`:
   - Include all metadata directly in the array
   - Match `filename` with actual image files

**Example**:
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

**Note**: Gallery page features an immersive list layout with alternating image/description positions and full-screen modal view.

### 10. Update CV

1. Replace PDF in `/public/cv/`
2. Update `cvUrl` in `/src/data/index.ts`:
```typescript
export const cvUrl = '/cv/Your-CV-Name.pdf';
```

### 11. Customize GitHub Profile

Edit `/src/components/sections/GitHubProfile.tsx`:
- Replace `TanvirTaaha` with your GitHub username in all image URLs

### 12. Customize Navigation

Edit `/src/components/Navbar.tsx` → `navItems` array:
```typescript
const navItems = [
  { id: 'about', label: 'HOME' },
  { id: 'projects', label: 'PROJECTS' },
  // Add more items...
];
```

**Important**: The `id` must match the section's `id` attribute.

### 13. Customize Colors/Theme

Edit `/src/styles/globals.css`:
- Update CSS variables in `:root` (light mode)
- Update CSS variables in `.dark` (dark mode)
- Current theme: Teal/cyan/green pastel palette

## Features

- ✅ **Modern UI**: VS Code "Modern" theme inspired design
- ✅ **Dark/Light Mode**: Seamless theme switching with persistent preference
- ✅ **Responsive Design**: Fully responsive (mobile, tablet, desktop)
- ✅ **Smooth Animations**: Fast, smooth transitions (200ms)
- ✅ **Compact Layout**: Efficient use of space, minimal scrolling
- ✅ **Separate Gallery Page**: Immersive gallery page with alternating layouts and full-screen modal
- ✅ **Toggle Publications**: Show/hide publications section
- ✅ **Sorted News**: Automatically sorted by date (latest first)
- ✅ **GitHub Integration**: Stats, languages, streak, contribution graph
- ✅ **List-style Projects**: Thumbnails on left, details on right
- ✅ **Research Cards**: Large thumbnails with detailed descriptions
- ✅ **Social Icons**: SVG icons for GitHub, LinkedIn, Twitter/X, Email, Website
- ✅ **Smooth Scrolling**: Automatic section highlighting on scroll
- ✅ **Mobile Menu**: Collapsible menu with background overlay
- ✅ **TypeScript**: Full type safety throughout

## File Naming Conventions

- **Components**: PascalCase (e.g., `Hero.tsx`, `GitHubProfile.tsx`)
- **Sections**: Match section name (e.g., `Projects.tsx` for projects section)
- **Images**: kebab-case or descriptive names (e.g., `profile.png`, `research-thumbnail.jpg`)
- **PDFs**: Descriptive names (e.g., `CV-Tanvir Hossain Taaha.pdf`)

## TypeScript Types

All types are defined in `/src/types/index.ts`:
- `PersonalInfo`, `Education`, `Experience`, `Thesis`
- `Project`, `Publication`, `ResearchItem`
- `ExtracurricularActivity`
- `NewsItem`, `Skill`, `GalleryItem`
- `SocialLink`, `Stat`

## Styling

- **Framework**: Tailwind CSS v4
- **Theme System**: CSS variables for dynamic theming
- **Colors**: Teal/cyan/green pastel palette
- **Transitions**: 200ms cubic-bezier for smooth animations
- **Responsive**: Mobile-first approach with breakpoints

## Navigation Flow

1. **Desktop**: Fixed navbar with centered tabs, smooth scroll to sections
2. **Mobile**: Hamburger menu with background overlay, name appears when menu opens
3. **Active Section**: Automatically highlights based on scroll position

## Content Management Strategy

- **Centralized Data**: All content in `/src/data/index.ts` (including gallery metadata)
- **Static Assets**: Organized by type in `/public/` subdirectories
- **Type Safety**: TypeScript interfaces ensure data consistency

---

**Last Updated**: Reflects current project state with all implemented features and sections.
