# Zenjira Logo Assets

This directory contains all official Zenjira logo variants for use across the application, documentation, and marketing materials.

## Logo Concept

The Zenjira logo represents the core concept of AI-powered Jira automation:

- **Neural Network Pattern**: The interconnected nodes symbolize AI intelligence and machine learning
- **Workflow Arrows**: Directional arrows represent automation and process flow
- **Transparent Background**: No background color allows flexible usage on any surface
- **Gradient Colors**: Blue to purple gradient reflects modern tech aesthetics and innovation
- **Subtle "Z" Integration**: The letter "Z" is subtly integrated into the design for brand recognition

## Available Variants

### Available Files

- `logo-icon-for-light-bg.svg` - Icon only, use on light backgrounds (darker colors)
- `logo-icon-for-dark-bg.svg` - Icon only, use on dark backgrounds (lighter colors)
- `logo-horizontal-for-light-bg.svg` - Horizontal layout, use on light backgrounds
- `logo-horizontal-for-dark-bg.svg` - Horizontal layout, use on dark backgrounds
- `logo-vertical-for-light-bg.svg` - Vertical layout, use on light backgrounds
- `logo-vertical-for-dark-bg.svg` - Vertical layout, use on dark backgrounds

## Usage Guidelines

### When to Use Each Variant

**Icon Only (`logo-icon.svg`)**

- Favicons
- App icons
- Social media profile pictures
- Small spaces where text would be unreadable

**Horizontal Layout (`logo-horizontal.svg`)**

- Website headers
- Email signatures
- Business cards
- Letterheads
- Wide banner spaces

**Vertical Layout (`logo-vertical.svg`)**

- Mobile app splash screens
- Tall banner spaces
- Print materials with vertical orientation
- Social media posts

### Background Selection

**For Light Backgrounds** (white, light gray, etc.)

- Use `*-for-light-bg.svg` files
- These have darker colors (#3b82f6, #8b5cf6) for good contrast

**For Dark Backgrounds** (black, dark gray, etc.)

- Use `*-for-dark-bg.svg` files
- These have lighter colors (#60a5fa, #a78bfa) for good contrast

## Color Palette

### Primary Colors

- **Blue**: #3b82f6 (Primary brand color)
- **Indigo**: #6366f1 (Secondary brand color)
- **Purple**: #8b5cf6 (Accent color)

### Light Theme Colors

- **Node Blue**: #60a5fa
- **Node Purple**: #a78bfa
- **Text**: #1e293b to #6366f1 gradient
- **Subtitle**: #64748b

### Dark Theme Colors

- **Background**: #1e40af to #7c3aed gradient
- **Node Blue**: #93c5fd
- **Node Purple**: #c4b5fd
- **Text**: #f8fafc to #c4b5fd gradient
- **Subtitle**: #94a3b8

## Technical Specifications

### SVG Properties

- Optimized for web performance
- Scalable without quality loss
- Small file sizes
- Compatible with all modern browsers

### Recommended Sizes

- **Favicon**: 32x32px, 64x64px
- **App Icon**: 512x512px
- **Header Logo**: 200x64px (horizontal)
- **Mobile Logo**: 120x140px (vertical)

## Implementation Example

```tsx
// React/Next.js usage
import Image from 'next/image'

// For light backgrounds
<Image
  src="/assets/logos/logo-horizontal-dark.svg"
  alt="Zenjira Logo"
  width={200}
  height={64}
/>

// For dark backgrounds
<Image
  src="/assets/logos/logo-horizontal.svg"
  alt="Zenjira Logo"
  width={200}
  height={64}
/>
```

## File Organization

```
public/assets/logos/
├── logo-icon-for-light-bg.svg
├── logo-icon-for-dark-bg.svg
├── logo-horizontal-for-light-bg.svg
├── logo-horizontal-for-dark-bg.svg
├── logo-vertical-for-light-bg.svg
├── logo-vertical-for-dark-bg.svg
├── preview.html
└── README.md
```

## Brand Guidelines

1. **Maintain Aspect Ratio**: Never stretch or distort the logo
2. **Minimum Size**: Don't use the logo smaller than 24px height for horizontal variants
3. **Clear Space**: Maintain clear space around the logo equal to the height of the icon
4. **Background Contrast**: Ensure sufficient contrast between logo and background (logos work on both light and dark backgrounds)
5. **Transparent Background**: All logos have transparent backgrounds for maximum flexibility
6. **Consistent Usage**: Use the same variant consistently within a single application or document

## Converting to Other Formats

If you need PNG or other formats:

1. **Online Tools**: Use CloudConvert or SVGOMG
2. **Design Software**: Export from Figma, Illustrator, or Sketch
3. **Command Line**: Use ImageMagick (`magick logo.svg logo.png`)
4. **Recommended Sizes**: 64px, 128px, 256px, 512px for icons

## License

These logo assets are proprietary to the Zenjira project and should only be used in accordance with the project's branding guidelines.
