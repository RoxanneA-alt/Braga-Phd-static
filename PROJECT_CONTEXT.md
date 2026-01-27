# Braga PhD Static Website - Project Context

## Project Overview

This is a static website migration project for **Raffaella Braga PhD** - converting from WordPress to a static HTML/CSS/JavaScript site that will be deployed on Netlify.

**Goal**: Rebuild the client's website to look **EXACTLY** as it currently does. Visual accuracy is paramount.

**Website**: https://bragaphd.com/

**Repository**: https://github.com/RoxanneA-alt/Braga-Phd-static.git

---

## Design System & Color Tokens

### Primary Colors (From Figma)
- **Madison (Primary Dark Blue)**: `#0E406A`
- **Charm (Rose/Pink Accent)**: `#D3769E`
- **Cornflower (Light Blue)**: `#88B3E6`
- **Foam (Very Light Blue/Grey)**: `#F2FCFE`
- **Lochmara (Medium Blue)**: `#007CBA`
- **Lily White (Light Grey-Blue)**: `#E4FAFF`
- **Cyan (Cyan Blue)**: `#A6E0F2`
- **White**: `#FFFFFF`
- **Black**: `#000000`

### Gradient Specifications

#### Navigation Bar Gradient
- **Type**: Linear
- **Angle**: 130 degrees
- **Colors**: 
  - Start (0%): `#88B3E6` (dark blue)
  - End (100%): `#A6E0F2` (light blue)
- **Direction**: Dark blue at top-left transitioning to light blue at bottom-right
- **CSS**: `linear-gradient(130deg, #88B3E6 0%, #A6E0F2 100%)`

#### Banner Gradient
- **Type**: Linear
- **Angle**: 130 degrees
- **Colors**: 
  - Start (0%): `#88B3E6` (dark blue)
  - Mid-point (40%): `#88B3E6` (to maintain dark blue dominance at top)
  - End (100%): `#A6E0F2` (light blue)
- **Direction**: Dark blue on top, light blue on bottom
- **CSS**: `linear-gradient(130deg, #88B3E6 0%, #88B3E6 40%, #A6E0F2 100%)`
- **Note**: The dark blue at the bottom of the nav bar should seamlessly connect with the dark blue at the top of the banner

#### Hero Section Gradient
- **Type**: Linear
- **Angle**: 130 degrees
- **Colors**: Same as navigation bar
- **CSS**: `linear-gradient(130deg, #88B3E6 0%, #A6E0F2 100%)`

### Typography

#### Font Families
- **Playfair Display**: Used for headings (Regular & Bold weights)
- **Helvetica**: Used for body text and navigation
- **SF Pro Text**: Alternative body text option

#### Font Sizes (From Figma)
- Base: `15.8px`
- 16px: `16px`
- 18px: `18px`
- Large: `43.2px`
- Hero: `79.2px`

#### Line Heights (From Figma)
- Base: `26.93px`
- 14px: `14px`
- 20px: `20px`
- 30px: `30.6px`
- 32px: `32.76px`
- 36px: `36px`
- 43px: `43.2px`
- 79px: `79.2px`

---

## Using Figma MCP

### Server Configuration
- **Server Name**: `user-Figma-MCP`
- **Configuration File**: `~/.cursor/mcp.json`
- **Server URL**: `https://mcp.figma.com/mcp`

### Accessing Figma Design Nodes

#### Step 1: Get Design Context
Always start by getting the design context from Figma:

```javascript
call_mcp_tool(
  server: "user-Figma-MCP",
  toolName: "get_design_context",
  arguments: {
    fileKey: "4FOWykBQIcec5qmjVMdBc2",
    nodeId: "1508-70"  // Extract from Figma URL
  }
)
```

#### Step 2: Get Screenshot
**CRITICAL**: Always get a screenshot to see the visual design:

```javascript
call_mcp_tool(
  server: "user-Figma-MCP",
  toolName: "get_screenshot",
  arguments: {
    fileKey: "4FOWykBQIcec5qmjVMdBc2",
    nodeId: "1508-70"
  }
)
```

### Important Rules for Figma MCP Usage

#### 1. Screenshot Takes Priority
- **The screenshot is the source of truth** - if there's any conflict between design context data and the screenshot, **always match the screenshot exactly**
- The goal is to rebuild the website to look EXACTLY as it currently does
- Visual accuracy overrides any discrepancies in design tokens

#### 2. Gradient Accuracy
- Always check the screenshot for gradient direction and color stops
- Verify gradient angles match (130 degrees for nav/banner/hero)
- Ensure color transitions are smooth and match the visual
- Pay attention to where dark and light colors meet (e.g., nav bar bottom connecting to banner top)

#### 3. Typography Accuracy
- Use the screenshot to verify:
  - Font sizes and weights
  - Line heights and spacing
  - Text alignment (centered, left, right)
  - Text hierarchy (which text is largest, smallest, etc.)
- Don't rely solely on design tokens - verify visually

#### 4. Color Accuracy
- Extract exact hex colors from design context
- Verify colors match the screenshot
- Pay attention to text contrast against backgrounds
- Use color stops in gradients to maintain proper contrast (e.g., keeping dark blue at top of banner for text readability)

#### 5. Layout Accuracy
- Match spacing, padding, and margins exactly as shown in screenshot
- Verify grid layouts and column structures
- Check alignment of elements (centered, left-aligned, etc.)
- Match border radius and shadows

### Extracting Node IDs from Figma URLs

Figma URLs follow this pattern:
```
https://www.figma.com/design/{fileKey}/Rafaella-Braga?node-id={nodeId}&m=dev
```

- **fileKey**: `4FOWykBQIcec5qmjVMdBc2` (constant for this project)
- **nodeId**: Extract from URL (e.g., `1508-70`, `1507-2`, `1504-3`)

### Common Figma MCP Tools

1. **get_design_context**: Gets design tokens, colors, typography, spacing
2. **get_screenshot**: Gets visual representation (PRIORITY)
3. **get_metadata**: Gets node metadata
4. **get_variable_defs**: Gets design variable definitions

---

## Project Structure

```
Braga-phd-static/
├── index.html          # Main homepage
├── styles.css          # All styles with design tokens
├── script.js           # JavaScript for interactivity
├── images/             # All image assets
│   ├── HomeGrown-Image-Fullv2-*.webp  # Hero section image
│   └── [other images]
└── PROJECT_CONTEXT.md  # This file
```

---

## Design Tokens System

All design tokens are defined in `styles.css` using CSS custom properties:

```css
:root {
    /* Colors */
    --color-madison: #0E406A;
    --color-charm: #D3769E;
    --color-cornflower: #88B3E6;
    --color-foam: #F2FCFE;
    --color-lochmara: #007CBA;
    --color-lily-white: #E4FAFF;
    --color-cyan: #A6E0F2;
    
    /* Semantic mappings */
    --primary: var(--color-madison);
    --secondary: var(--color-charm);
    --accent: var(--color-cornflower);
    
    /* Typography */
    --font-helvetica: 'Helvetica', ...;
    --font-playfair: 'Playfair Display', ...;
    
    /* Spacing, shadows, etc. */
}
```

### Reusable Components

- **Buttons**: `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-link`, `.btn-cta`
- **Cards**: `.card`, `.card-image`, `.card-content`, `.card-title`, `.card-text`
- **Forms**: `.form-group`, `.form-label`, `.form-input`, `.form-textarea`
- **Layout**: `.container`, `.section`, `.section-alt`

---

## Button Hover States

### Primary Button Hover
- **Background**: Light blue `#A6E0F2`
- **Text Color**: Vibrant turquoise-blue `#00B4D8`
- **Border**: 2px solid turquoise-blue `#00B4D8`
- **Shadow**: `0 4px 8px rgba(0, 0, 0, 0.15)`

---

## Git Branching Strategy

### Branches

1. **`main`**: Production branch
   - Only deployed to Netlify
   - Updated once per week on Fridays
   - Contains stable, production-ready code

2. **`backup`**: Development branch
   - Daily work and development
   - All commits and pushes go here
   - Used for testing and iteration

### Workflow

**Daily Development:**
```bash
git checkout backup
# Make changes
git add .
git commit -m "Description of changes"
git push origin backup
```

**Weekly Friday Deployment:**
```bash
git checkout main
git merge backup
git push origin main
# Netlify automatically deploys from main branch
```

**Important Note for AI Assistants:**
- When committing and pushing changes, use `required_permissions: ['all']` to ensure git operations work properly
- Git push operations require authentication and full permissions to succeed

### Why This Strategy?

- **Saves Netlify credits**: Only deploys once per week
- **Stable production**: Main branch always has tested, stable code
- **Flexible development**: Can iterate freely on backup branch

---

## Netlify Forms

The site uses Netlify's form handling. Forms must include:

1. **Form attributes**:
   - `name="form-name"` (unique identifier)
   - `method="POST"`
   - `data-netlify="true"`
   - `netlify-honeypot="bot-field"`

2. **Hidden fields**:
   ```html
   <input type="hidden" name="form-name" value="contact">
   <p class="hidden">
       <label>Don't fill this out if you're human: 
           <input name="bot-field" />
       </label>
   </p>
   ```

3. **Form names**:
   - `tuned-in-care`: Signup form for Tuned In Care updates
   - `contact`: Contact/appointment form

Forms will automatically work once deployed to Netlify.

---

## Image Assets

### Hero Section Image
- **File**: `images/HomeGrown-Image-Fullv2-1568x1412.webp`
- **Highest resolution available**: 1568x1412
- **Format**: WebP
- **Usage**: Hero section illustration

### Image Naming Convention
- Look for highest resolution version (largest dimensions)
- Prefer WebP format for better compression
- Check for `@3x` or dimension suffixes to find best quality

---

## Key Design Patterns Learned

### 1. Gradient Alignment
- Navigation bar and banner gradients must align where they meet
- Dark blue at bottom of nav should touch dark blue at top of banner
- Use same angle (130deg) for seamless connection

### 2. Text Contrast
- When gradient backgrounds are light, text may need:
  - Color stops to keep dark areas where text sits
  - Text shadows for readability
  - Adjusted gradient stops (e.g., 40% dark blue before transitioning)

### 3. Typography Hierarchy
- Hero section: Large bold text, smaller connector, large bold continuation
- Use Playfair Display for headings (serif, elegant)
- Use Helvetica for body text (clean, readable)

### 4. Component Reusability
- All colors, fonts, spacing defined as CSS variables
- Reusable button, card, and form components
- Consistent styling across all pages

### 5. Visual Accuracy Priority
- Screenshot from Figma is the ultimate reference
- Match visual appearance exactly, even if it means overriding design tokens
- Pay attention to spacing, alignment, and visual details

---

## Common Issues & Solutions

### Issue: Gradient doesn't match visually
**Solution**: 
- Check screenshot for exact gradient appearance
- Adjust color stops if needed (e.g., `#88B3E6 0%, #88B3E6 40%, #A6E0F2 100%`)
- Verify angle matches (130deg)

### Issue: Text not readable on gradient
**Solution**:
- Add color stops to keep dark color where text sits
- Add subtle text shadow
- Adjust gradient to maintain contrast

### Issue: Colors don't match Figma
**Solution**:
- Extract exact hex values from `get_design_context`
- Verify against screenshot
- Use exact values, not approximations

### Issue: Typography doesn't match
**Solution**:
- Check screenshot for visual hierarchy
- Verify font sizes, weights, and line heights
- Match text alignment (centered, left, etc.)

---

## Next Steps

1. Continue building out remaining pages using same Figma MCP workflow
2. Ensure all pages match Figma designs exactly
3. Test forms on Netlify after deployment
4. Verify responsive design on mobile/tablet
5. Optimize images for web performance

---

## Important Reminders

1. **Screenshot is always the source of truth** - match it exactly
2. **Visual accuracy overrides design tokens** if there's a conflict
3. **Always use Figma MCP** to get both design context AND screenshot
4. **Test gradients visually** - ensure colors align where sections meet
5. **Weekly Friday deployments** - only merge backup to main then
6. **Save Netlify credits** - deploy only once per week

---

## Resources

- **Figma Design File**: https://www.figma.com/design/4FOWykBQIcec5qmjVMdBc2/Rafaella-Braga
- **GitHub Repository**: https://github.com/RoxanneA-alt/Braga-Phd-static.git
- **Current Website**: https://bragaphd.com/
- **Netlify**: Deploy from main branch (configured separately)

---

*Last Updated: January 27, 2026*
