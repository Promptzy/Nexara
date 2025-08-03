# Zenjira Logo Assets

This directory contains all logo assets for the Zenjira project management platform.

## 📁 File Structure

```
public/assets/logos/
├── logo-icon.svg              # Icon only (light theme)
├── logo-icon-dark.svg         # Icon only (dark theme)
├── logo-horizontal.svg        # Icon + text horizontal (light theme)
├── logo-horizontal-dark.svg   # Icon + text horizontal (dark theme)
├── logo-vertical.svg          # Icon + text vertical (light theme)
└── README.md                  # This documentation
```

## 🎨 Logo Variants

### 1. Icon Only (`logo-icon.svg`, `logo-icon-dark.svg`)

- **Use case**: Favicon, small spaces, mobile apps
- **Dimensions**: 64x64px
- **Format**: SVG (scalable)
- **Theme support**: Light and dark variants

### 2. Horizontal (`logo-horizontal.svg`, `logo-horizontal-dark.svg`)

- **Use case**: Navigation bar, headers, main branding
- **Dimensions**: 200x64px
- **Format**: SVG (scalable)
- **Theme support**: Light and dark variants
- **Includes**: Icon + "Zenjira" text + "Project Management" tagline

### 3. Vertical (`logo-vertical.svg`)

- **Use case**: Sidebar, footer, centered layouts
- **Dimensions**: 120x120px
- **Format**: SVG (scalable)
- **Theme support**: Light theme only

## 🚀 Usage in React Components

### Using the Logo Component

```tsx
import Logo from '@/components/Logo'

// Basic usage
<Logo />

// With custom props
<Logo
  variant="horizontal"
  size="lg"
  className="my-custom-class"
/>

// Icon only for small spaces
<Logo variant="icon" size="sm" />

// Vertical layout for sidebars
<Logo variant="vertical" size="md" />
```

### Props

| Prop          | Type                                   | Default        | Description                                |
| ------------- | -------------------------------------- | -------------- | ------------------------------------------ |
| `variant`     | `'icon' \| 'horizontal' \| 'vertical'` | `'horizontal'` | Logo layout variant                        |
| `size`        | `'sm' \| 'md' \| 'lg' \| 'xl'`         | `'md'`         | Logo size                                  |
| `className`   | `string`                               | `''`           | Additional CSS classes                     |
| `showTagline` | `boolean`                              | `true`         | Show/hide tagline (for horizontal variant) |

### Size Mappings

| Size | Icon    | Horizontal | Vertical |
| ---- | ------- | ---------- | -------- |
| `sm` | 32x32px | 100x32px   | 32x32px  |
| `md` | 48x48px | 150x48px   | 48x48px  |
| `lg` | 64x64px | 200x64px   | 64x64px  |
| `xl` | 80x80px | 250x80px   | 80x80px  |

## 🎯 Design System

### Colors

- **Primary Gradient**: `#6C7DEE` to `#8B5CF6` (light theme)
- **Primary Gradient**: `#8B5CF6` to `#A855F7` (dark theme)
- **Text**: `#6B7280` (light theme), `#9CA3AF` (dark theme)

### Typography

- **Font Family**: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Logo Text**: 700 weight, 28px (horizontal), 20px (vertical)
- **Tagline**: 400 weight, 10px (horizontal), 8px (vertical)

### Symbol Meaning

The logo features a zen-inspired design with:

- **Central dot**: Represents focus and center
- **Three curved lines**: Symbolize meditation, flow, and project management
- **Circular background**: Unity and completeness

## 🔧 Technical Details

### SVG Optimization

All SVG files are optimized for web use with:

- Minimal file size
- Scalable vector graphics
- Proper viewBox attributes
- Semantic element names

### Theme Integration

The Logo component automatically detects the current theme using the `useTheme` hook and displays the appropriate variant.

### Performance

- SVG format ensures crisp rendering at any size
- Priority loading for main navigation logos
- Lazy loading for secondary usage

## 📱 Responsive Design

The logos are designed to work across all screen sizes:

- **Mobile**: Icon variant recommended
- **Tablet**: Horizontal or icon variants
- **Desktop**: All variants supported

## 🎨 Brand Guidelines

### Minimum Size

- **Icon**: 16x16px minimum
- **Horizontal**: 100x32px minimum
- **Vertical**: 32x32px minimum

### Clear Space

Maintain clear space around the logo equal to the height of the "Z" in "Zenjira".

### Background Usage

- **Light backgrounds**: Use light theme variants
- **Dark backgrounds**: Use dark theme variants
- **Transparent backgrounds**: Use light theme variants

## 🔄 Future Enhancements

- [ ] PNG exports for print materials
- [ ] Additional color variants
- [ ] Animated logo variants
- [ ] High-resolution exports for marketing materials

## 📞 Support

For logo-related questions or requests, please refer to the project documentation or create an issue in the repository.
