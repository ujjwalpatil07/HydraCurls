# HydraCurls

## Responsive Curly Hair Care Brand Website

HydraCurls is a modern, responsive brand website created for a premium
hair-care range specially positioned for Arab curly, coily, and wavy
hair types. The project focuses on a visually rich landing-page
experience with product storytelling, ingredient education, community
results, expert content, and clear calls to action.

The website is implemented from the provided Figma design with
responsive layouts for desktop, tablet, and mobile devices.

------------------------------------------------------------------------

## ✨ Features

-   Premium HydraCurls brand landing page
-   Responsive navigation
-   Hero section with hydration-focused branding
-   Brand introduction and product presentation
-   Product showcase and product information
-   Interactive product experience/carousel
-   HydraCurls hydration promise
-   Premium ingredient section
-   Hyaluronic Acid, Coconut Oil, and Avocado Extract content
-   Ingredient GIF and video assets
-   Community before/after comparison slider
-   Customer testimonial card
-   Influencer/expert testimonial videos
-   Hair-type content for types 2, 3, and 4
-   Curly Girl Method educational content
-   Final conversion-focused CTA
-   Responsive footer
-   Smooth animations and hover interactions
-   Reduced-motion support
-   Responsive design across desktop, tablet, and mobile

------------------------------------------------------------------------

## 🛠️ Technology Stack

### Frontend

-   React.js
-   Vite
-   JavaScript / JSX
-   Tailwind CSS
-   Framer Motion

### Design & Development

-   Figma
-   Custom/local typography
-   Git / GitHub
-   VS Code
-   Figma MCP integration where available for design inspection and
    design-to-code

------------------------------------------------------------------------

## 🎨 Design System

  Element            Value
  ------------------ -----------------------------------------
  Primary Dark       `#040C1E`
  Primary Cyan       `#00D5FD`
  Light Background   `#F3FDFF`
  Light Blue         `#DAF6FF`
  Purple Accent      `#76468A`
  Secondary Blue     `#5365BB`
  UI Font            Gontham / Avenir Next / Arial
  Display Font       Kaushan Script / Segoe Script / cursive

The visual language uses organic curves, wave dividers, soft gradients,
premium product imagery, rounded elements, and subtle motion.

------------------------------------------------------------------------

## 📁 Project Structure

``` text
src/
├── components/
│   ├── common/
│   │   ├── WaveDivider.jsx
│   │   ├── BeforeAfterSlider.jsx
│   │   └── TestimonialCard.jsx
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── ProductExperienceWrapper.jsx
│   └── sections/
│       ├── BrandIntroSection.jsx
│       ├── ExpertsSection.jsx
│       ├── HeroSection.jsx
│       ├── HydrationSection.jsx
│       ├── NatureSection.jsx
│       ├── ProductExperienceSection.jsx
│       ├── ProductInformationSection.jsx
│       ├── ProductShowcaseSection.jsx
│       └── CommunityResultsSection.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx

assets/
├── fonts/
├── images/
└── videos/
```

------------------------------------------------------------------------

## 🧩 Website Sections

### Hero

Introduces HydraCurls and establishes the primary visual identity and
hydration-focused messaging.

### Brand Introduction

Introduces HydraCurls as a new hair-care range designed for Arab curly,
coily, and wavy hair, highlighting 48-hour hydration, key ingredients,
product imagery, and CTAs.

### Product Showcase

Provides a visual campaign/product presentation.

### Product Information

Communicates product-specific information and benefits.

### Product Experience

Provides interactive browsing between: - Shampoo - Conditioner - Cream -
Gel - Mask

### HydraCurls Promise

Communicates the brand's hydration-focused proposition and product
benefits.

### Premium Ingredients

Highlights: - Hyaluronic Acid - Coconut Oil - Avocado Extract

### Community Results

Presents an interactive before/after comparison and customer
testimonial.

> "I've struggled with frizz my whole life. Hydra Curls is the first
> range that actually tamed my hair for more than a day! The 48-hour
> claim is real."

--- Aisha K, Dubai, UAE

### Influencer Approved

Presents influencer/expert testimonial videos.

### Designed for You

Explains suitability for Arab curly, coily, and wavy hair types: - Type
2 - Type 3 - Type 4

### Learn & Grow

Provides educational content around curly hair and the Curly Girl
Method.

### Final CTA

Encourages users to explore products and learn the Curly Girl Method.

### Footer

Provides supporting navigation, brand information, connect content, and
newsletter content.

------------------------------------------------------------------------

## 📱 Responsive Design

HydraCurls is designed for: - Desktop - Laptop - Tablet - Mobile

Responsive behavior includes fluid typography, flexible grids,
responsive imagery/video, mobile-friendly navigation, touch-friendly
controls, and repositioning or hiding decorative elements where
necessary.

Tailwind CSS breakpoints and CSS `clamp()` values are used for smooth
scaling.

------------------------------------------------------------------------

## 🎬 Assets

### Images

``` text
logo1.png
logo2.png
shampoo.png
conditioner.png
cream.png
gel.png
mask.png
water-splash.png
background-pattern.png
before-after-hair.jpg
campaign-composition.png
```

### Videos

``` text
hero-hydration-animation.mp4
ingredient-hyaluronic-acid.mp4
ingredient-coconut-oil.mp4
ingredient-avocado-extract.mp4
testimonial-good-hair-day.mp4
testimonial-curly-compliment.mp4
testimonial-fine-long-hair.mp4
testimonial-good-wash-day.mp4
```

The project also contains supporting GIF and image assets for
ingredients, hair types, and brand storytelling.

------------------------------------------------------------------------

## ⚙️ Installation

### 1. Clone the repository

``` bash
git clone [YOUR_GITHUB_REPOSITORY_URL]
```

### 2. Navigate to the project

``` bash
cd hydra-curls
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

------------------------------------------------------------------------

## 📦 Available Scripts

``` bash
npm run dev
```

Starts the Vite development server.

``` bash
npm run build
```

Creates a production build.

``` bash
npm run preview
```

Previews the production build locally.

------------------------------------------------------------------------

## 🖼️ Figma Design

The website was implemented based on the HydraCurls Figma design.

**Figma:**\
https://www.figma.com/design/aZ8lk2zFdwk9xR47Wdpgq7/Untitled--Copy-?node-id=1-503

------------------------------------------------------------------------

## 🚀 Deployment

The frontend can be deployed using platforms such as Vercel or Netlify.

Before deployment, verify: - Production build succeeds - All assets load
correctly - Video assets work correctly - Responsive layouts work across
target devices - Navigation and CTA links work - Interactive components
work correctly

### Live Demo

``` text
https://hydra-curls-two.vercel.app/
```

### GitHub Repository

``` text
https://github.com/ujjwalpatil07/HydraCurls.git
```

------------------------------------------------------------------------

## 🧪 Testing Checklist

-   [ ] Desktop layout
-   [ ] Tablet layout
-   [ ] Mobile layout
-   [ ] Navigation
-   [ ] Product carousel
-   [ ] Before/after slider
-   [ ] Testimonial section
-   [ ] Expert videos
-   [ ] Image loading
-   [ ] Video playback
-   [ ] Hover states
-   [ ] Animation behavior
-   [ ] Reduced-motion behavior
-   [ ] CTA links
-   [ ] Production build
-   [ ] Deployment

------------------------------------------------------------------------

## ♿ Accessibility & Performance

The project considers: - Semantic HTML where appropriate - Alternative
text for meaningful images - Muted autoplay videos - `playsInline` for
video compatibility - Lazy loading for supporting images -
Reduced-motion handling - Responsive layouts - Touch-friendly
interactions

------------------------------------------------------------------------

## 🤖 AI & Development Assistance

### ChatGPT

Used during development for: - React development assistance -
Debugging - Component architecture - Tailwind CSS implementation -
Responsive design refinement - Animation implementation - Documentation

### Figma / Figma MCP

Figma was used as the primary UI/UX design reference. Figma MCP was used
where available for design inspection and design-to-code workflow.

------------------------------------------------------------------------

## 📌 Project Scope

HydraCurls is currently a frontend-focused brand and landing-page
implementation.

The scope includes the visual experience, responsive behavior, product
presentation, educational content, community content, and interactive
frontend components.

Backend services, authentication, payments, database systems, and AI/LLM
services are not claimed as part of the current HydraCurls
implementation.

------------------------------------------------------------------------


