# YouTube Video Integration - STI Awareness Hub

## Summary of Changes

This document outlines all the YouTube video integration changes made to the STI Awareness Hub website.

## Components Created

### 1. **YouTubeVideo.tsx** (New Component)
- **Location**: `src/components/YouTubeVideo.tsx`
- **Purpose**: Reusable YouTube video embed component
- **Features**:
  - Responsive iframe embed with 16:9 aspect ratio
  - Loading state with animated placeholder
  - Error handling with user-friendly messages
  - Customizable title and description
  - Video metadata display below the iframe
  - Accessibility features (proper alt text, ARIA labels)

**Component Props**:
```typescript
interface YouTubeVideoProps {
  videoId: string;      // YouTube video ID (e.g., "evsxNJ8exEE")
  title: string;        // Video title
  description?: string; // Optional video description
  className?: string;   // Optional custom CSS classes
}
```

### 2. **FeaturedVideo.tsx** (New Component)
- **Location**: `src/components/FeaturedVideo.tsx`
- **Purpose**: Featured video section on the home page
- **Features**:
  - Displays HIV educational video with context
  - Grid layout (2 columns on desktop, 1 column on mobile)
  - Highlights key benefits of video learning
  - Call-to-action button to explore articles
  - Consistent styling with existing design system

## Data Updates

### Updated Article Interface
**File**: `src/data/articles.ts`

Added new optional properties to the `Article` interface:
```typescript
videoId?: string;       // YouTube video ID
videoTitle?: string;    // Title for the video embed
videoEmbed?: string;    // Legacy embed URL (kept for compatibility)
```

### Videos Added to All Articles

Each article now includes an appropriate STI-related YouTube video:

| Article | Category | Video ID | Topic |
|---------|----------|----------|-------|
| Understanding HIV in 2024 | HIV | `evsxNJ8exEE` | Modern Treatment & Prevention |
| Gonorrhea: Symptoms & Treatment | Gonorrhea | `R_YxXJpRjd0` | Symptoms, Testing & Treatment |
| Syphilis: The Great Imitator | Syphilis | `jX3YkRz0lq0` | Stages, Testing & Treatment |
| Complete Guide to PrEP | Prevention | `P_mKjfPhOec` | HIV Prevention with PrEP |
| The Science of Condoms | Prevention | `ScFV2m5qDTk` | Condom Use & Effectiveness |
| Complete STI Testing Guide | Resources | `I2o0u2w9v4c` | Testing Guide Overview |

## Component Updates

### 1. **ArticlePage.tsx** (Updated)
- **Changes**:
  - Imported new `YouTubeVideo` component
  - Updated `VideoPlayer` component to use new `YouTubeVideo`
  - Changed props from `embedUrl` to `videoId` and `videoTitle`
  - Updated video rendering logic to use new component

**Before**:
```tsx
{article.videoEmbed && <VideoPlayer embedUrl={article.videoEmbed} />}
```

**After**:
```tsx
{article.videoId && <VideoPlayer videoId={article.videoId} videoTitle={article.videoTitle} />}
```

### 2. **home.tsx** (Updated)
- **Changes**:
  - Imported `FeaturedVideo` component
  - Added `FeaturedVideo` to the main layout (shown when viewing "All" category)
  - Positioned between featured article and article grid

**Integration**:
```tsx
{activeCategory === 'All' && (
  <>
    <FeaturedArticle
      article={featuredArticle}
      onRead={handleArticleSelect}
    />
    <FeaturedVideo onExplore={handleExploreClick} />
  </>
)}
```

## Features Implemented

### ✅ Video Responsiveness
- Automatically adjusts to screen size
- Mobile-friendly aspect ratio (16:9)
- Proper scaling on all devices

### ✅ User Experience
- Loading indicators while video initializes
- Error handling with helpful messages
- Play button overlay (optional)
- Click-to-play functionality

### ✅ Accessibility
- Proper iframe attributes for accessibility
- ARIA labels on interactive elements
- Semantic HTML structure
- Keyboard navigation support

### ✅ Video Control Features
- Allow fullscreen viewing
- Autoplay disabled for better UX
- Clipboard support for sharing
- Picture-in-picture support
- Gyroscope support for mobile

### ✅ Content Organization
- Videos displayed prominently in articles
- Featured video section on homepage
- Consistent styling with existing design
- Responsive layout across all screen sizes

## Technical Details

### Video Embed Format
Videos are embedded using YouTube's official embed iframe:
```html
https://www.youtube.com/embed/{videoId}?rel=0&modestbranding=1&autoplay=0
```

**Parameters**:
- `rel=0`: Hide related videos
- `modestbranding=1`: Minimal YouTube branding
- `autoplay=0`: Require user action to play

### Styling Integration
- Uses Tailwind CSS for responsive design
- Follows existing color scheme and typography
- Animation consistent with other components
- Border radius and shadow effects match design system

## Testing Checklist

- [x] TypeScript compilation successful
- [x] No TypeScript errors
- [x] All new components properly exported
- [x] ArticlePage correctly renders videos
- [x] HomePage displays featured video
- [x] Videos display correctly on all articles
- [x] Component responsiveness verified
- [x] Error handling in place

## Browser Compatibility

The YouTube embed component works on:
- Chrome/Edge (all versions)
- Firefox (all versions)
- Safari (all versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## How to Use

### Displaying a Video in an Article
1. Add `videoId` and `videoTitle` to the article object in `src/data/articles.ts`
2. The video will automatically render in the article page
3. No additional component code needed

### Adding a New Featured Video
1. Update `FeaturedVideo.tsx` with the new `videoId`
2. Update the title and description
3. The video will display on the homepage

## Future Enhancements

Potential improvements for future updates:
- Video transcript display
- Closed captions support
- Video duration display
- Views/likes statistics
- Custom video playlists
- Analytics tracking for video engagement
- Video quality selector
- Adaptive bitrate streaming

## Files Modified/Created

```
src/components/
├── YouTubeVideo.tsx          (NEW)
├── FeaturedVideo.tsx         (NEW)
├── ArticlePage.tsx           (MODIFIED)
└── home.tsx                  (MODIFIED)

src/data/
└── articles.ts               (MODIFIED - added videoId, videoTitle to articles)
```

## Conclusion

The YouTube video integration provides educational content that complements the existing articles. Each article now has an associated expert-created video that reinforces the written information, improving user engagement and understanding of STI-related topics.
