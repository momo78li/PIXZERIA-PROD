# PIXZERIA Website - Replit Guide

## Overview

PIXZERIA is a German web design agency website built with a modern full-stack architecture. The application positions itself as "web design as easy as ordering pizza" and targets small to medium businesses (KMU) with fixed pricing packages, transparent costs, and GDPR compliance.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom pizza-themed design system
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: Hot reload with Vite middleware integration

### Development Environment
- **Platform**: Replit with Node.js 20, Web, and PostgreSQL 16 modules
- **Package Management**: NPM
- **Development Server**: Runs on port 5000

## Key Components

### Database Schema
The application uses three main tables:
- **users**: Basic user authentication (id, username, password)
- **website_checks**: Free website analysis requests (id, url, email, created_at)
- **contact_requests**: Contact form submissions (id, name, email, company, message, package, created_at)

### API Endpoints
- `POST /api/website-check`: Submit website for free analysis
- `POST /api/contact`: Submit contact form with package selection
- `GET /api/website-checks`: Retrieve all website check requests (admin)
- `GET /api/contact-requests`: Retrieve all contact requests (admin)

### Frontend Pages & Components
- **Single Page Application** with modular components:
  - Header with navigation
  - Hero section with CTAs
  - Services overview
  - Pricing packages (Starter €699, Professional €1,299, Enterprise €1,999)
  - Website check form
  - Case studies
  - About section
  - Blog preview
  - Contact CTA with modal form
  - Footer

### Design System
- **Theme**: Pizza-inspired color palette with custom CSS variables
- **Typography**: Poppins for headings, Inter for body text, Fredoka One for brand elements
- **Colors**: Red (#B91C1C), Orange (#FB923C), Gold (#EAB308), Cream (#FEFEFE)
- **Components**: Fully responsive with mobile-first approach

## Data Flow

### Website Check Process
1. User enters URL and email in hero or dedicated section
2. Form validates input and submits to `/api/website-check`
3. Server stores request in database
4. User receives confirmation toast
5. Business receives email notification (implied)

### Contact Request Process
1. User clicks contact CTA opening modal dialog
2. Form collects name, email, company, message, and selected package
3. Submits to `/api/contact` endpoint
4. Server validates and stores in database
5. User receives confirmation, business gets notification

### Content Management
- Static content served from React components
- Dynamic form submissions stored in PostgreSQL
- No CMS integration - content updates require code changes

## External Dependencies

### Core Dependencies
- **Database**: `@neondatabase/serverless` for PostgreSQL connection
- **ORM**: `drizzle-orm` with `drizzle-zod` for schema validation
- **Authentication**: Basic session management with `connect-pg-simple`
- **UI Library**: Comprehensive Radix UI component suite
- **Forms**: React Hook Form with Hookform Resolvers
- **Date Handling**: `date-fns` for timestamp formatting

### Development Dependencies
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Production bundle optimization
- **Vite Plugins**: Runtime error overlay and Replit integration
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Third-Party Services
- **Neon Database**: Serverless PostgreSQL hosting
- **Replit**: Development and hosting platform
- **Google Fonts**: Typography (Poppins, Inter, Fredoka One)
- **Unsplash**: Stock photography for case studies and blog

## Deployment Strategy

### Development
- **Environment**: Replit with live reload
- **Command**: `npm run dev` starts TSX server on port 5000
- **Hot Reload**: Vite middleware handles frontend updates
- **Database**: Automatic PostgreSQL provisioning in Replit

### Production Build
- **Build Process**: 
  1. `vite build` compiles React frontend to `dist/public`
  2. `esbuild` bundles Express server to `dist/index.js`
- **Deployment Target**: Replit Autoscale
- **Environment**: Node.js production server
- **Static Assets**: Served from `dist/public`

### Database Management
- **Migrations**: Drizzle Kit handles schema changes
- **Environment Variables**: `DATABASE_URL` required for connection
- **Schema**: Located in `shared/schema.ts` for type sharing

## Changelog

```
Changelog:
- June 15, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```