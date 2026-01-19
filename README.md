# Call Ready - Marketing Website

A modern Next.js marketing website for Call Ready, an intelligent voicemail and call routing system built for small service businesses.

## Overview

Call Ready is a veteran-owned service that helps mechanics, plumbers, electricians, contractors, and other tradespeople never miss a call while working on job sites.

## Features

- **Homepage**: Hero section, problem/solution, how it works, key features, testimonials
- **Features Page**: Deep dive into all capabilities (smart routing, voicemail, notifications, etc.)
- **Try It Now Page**: Interactive demo page where visitors can call and experience the system
- **Pricing Page**: Transparent pricing with three tiers (Starter, Professional, Business)
- **About Page**: Veteran-owned story, mission, values, team
- **Industries Page**: Specific use cases for different trades (plumbers, mechanics, electricians, contractors)
- **Contact Page**: Contact form and information

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter (Google Fonts)

## Design

The website design is inspired by the SolarOne theme with:
- Clean, modern aesthetic
- Electric blue, teal, and purple accent colors
- Responsive design for mobile and desktop
- Card-based components with shadows
- Gradient backgrounds

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd call-ready-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
call-ready-web/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── features/          # Features page
│   ├── pricing/           # Pricing page
│   ├── try-it-now/        # Demo page
│   ├── about/             # About page
│   ├── industries/        # Industries/use cases page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable React components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── CTAButton.tsx
│   ├── FeatureCard.tsx
│   ├── TestimonialCard.tsx
│   └── PricingCard.tsx
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`. The main brand colors are:
- Primary Blue: `#044FE7`
- Teal: `#00B6AF`
- Purple: `#7761FF`

### Content

All content is currently hardcoded in the page components. To update:
- Homepage content: `app/page.tsx`
- Feature descriptions: `app/features/page.tsx`
- Pricing tiers: `app/pricing/page.tsx`
- etc.

### Placeholders

The following placeholders need to be replaced:
- Phone numbers: Currently `(XXX) XXX-XXXX`
- Email: `support@callready.com`
- Images: Placeholder divs in components
- Team photos: `app/about/page.tsx`
- Dashboard screenshots: Various pages

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

Alternatively, build for production:
```bash
npm run build
npm run start
```

## License

Proprietary - Call Ready

## Support

For questions or support, contact support@callready.com