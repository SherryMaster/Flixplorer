# 🎬 Movie Catalog

A modern, responsive movie discovery application built with React and Vite. Search through thousands of movies, discover trending searches, and explore detailed movie information with a beautiful, intuitive interface.

![Movie Catalog](./public/hero-img.png)

## ✨ Features

- **🔍 Real-time Movie Search**: Search through thousands of movies with debounced input for optimal performance
- **📈 Trending Searches**: Track and display the most popular search terms with visual rankings
- **🎭 Movie Details**: View comprehensive movie information including ratings, release dates, and languages
- **📱 Responsive Design**: Fully responsive interface that works seamlessly across all devices
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and optimized production builds
- **🎨 Modern UI**: Beautiful gradient designs and smooth animations with Tailwind CSS
- **☁️ Cloud Backend**: Powered by Appwrite for reliable data storage and retrieval

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern features
- **Vite 7** - Next-generation frontend tooling
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Hooks** - Modern state management with hooks

### Backend & APIs
- **The Movie Database (TMDB) API** - Comprehensive movie data
- **Appwrite** - Backend-as-a-Service for search analytics
- **React-Use** - Collection of essential React hooks

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite Dev Server** - Hot module replacement
- **Modern JavaScript (ES6+)** - Latest JavaScript features

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **TMDB API Key** - Get one from [The Movie Database](https://www.themoviedb.org/settings/api)
- **Appwrite Account** - Sign up at [Appwrite](https://appwrite.io/)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-catalog
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**

   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

   Fill in your API keys and configuration:
   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
   VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
   VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` to see the application running.

## 🔧 Configuration

### TMDB API Setup

1. Visit [The Movie Database](https://www.themoviedb.org/)
2. Create an account and verify your email
3. Go to Settings → API
4. Request an API key
5. Copy your API key to the `VITE_TMDB_API_KEY` environment variable

### Appwrite Setup

1. Create an account at [Appwrite](https://appwrite.io/)
2. Create a new project
3. Set up a database with the following collection structure:

   **Collection: Search Terms**
   - `searchTerm` (String) - The search query
   - `count` (Integer) - Number of times searched
   - `movieId` (Integer) - TMDB movie ID
   - `posterUrl` (String) - Movie poster URL

4. Configure your Appwrite credentials in the environment variables

## 📁 Project Structure

```
movie-catalog/
├── public/                 # Static assets
│   ├── BG.png             # Background pattern
│   ├── hero-img.png       # Hero banner image
│   ├── logo.svg           # Application logo
│   ├── search.svg         # Search icon
│   ├── Star.svg           # Rating star icon
│   └── No-Poster-*.png    # Fallback poster images
├── src/
│   ├── components/        # React components
│   │   ├── MovieCard.jsx  # Individual movie display
│   │   ├── Search.jsx     # Search input component
│   │   └── Spinner.jsx    # Loading indicator
│   ├── App.jsx           # Main application component
│   ├── appwrite.js       # Appwrite configuration
│   ├── index.css         # Global styles and Tailwind config
│   └── main.jsx          # Application entry point
├── .env.example          # Environment variables template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md            # Project documentation
```

## 🎯 Key Components

### App.jsx
The main application component that orchestrates the entire movie catalog experience:

- **State Management**: Manages search terms, loading states, and movie data
- **API Integration**: Fetches data from TMDB API and Appwrite
- **Debounced Search**: Implements 500ms debounce for optimal search performance
- **Error Handling**: Comprehensive error handling for API failures

### MovieCard.jsx
Displays individual movie information in an attractive card format:

- **Movie Poster**: High-quality images with fallback for missing posters
- **Rating System**: Star ratings with vote counts
- **Movie Details**: Title, release year, and original language
- **Responsive Design**: Adapts to different screen sizes

### Search.jsx
Provides the search interface for movie discovery:

- **Real-time Input**: Instant search as you type
- **Visual Feedback**: Search icon and placeholder text
- **Accessibility**: Proper ARIA labels and keyboard navigation

### Spinner.jsx
Loading indicator component:

- **Smooth Animation**: CSS-based spinning animation
- **Accessibility**: Screen reader support with proper ARIA attributes
- **Consistent Styling**: Matches the application's design system

## 🔄 Data Flow

1. **User Input**: User types in the search box
2. **Debouncing**: Input is debounced for 500ms to prevent excessive API calls
3. **API Request**: Application fetches movie data from TMDB API
4. **Search Tracking**: Successful searches are logged to Appwrite for trending analysis
5. **UI Update**: Movie results are displayed in a responsive grid
6. **Trending Update**: Popular searches are shown in the trending section

## 🎨 Styling & Design

### Tailwind CSS Configuration
The application uses Tailwind CSS 4 with custom theme configuration:

- **Custom Colors**: Purple gradient theme with dark backgrounds
- **Typography**: DM Sans and Bebas Neue fonts for modern aesthetics
- **Responsive Breakpoints**: Custom breakpoint for extra small screens
- **Component Classes**: Reusable component styles for consistency

### Design Features
- **Gradient Text**: Beautiful purple gradients for headings
- **Glass Morphism**: Semi-transparent backgrounds with blur effects
- **Smooth Animations**: CSS transitions for interactive elements
- **Dark Theme**: Modern dark color scheme throughout

## 📱 Responsive Design

The application is fully responsive across all device sizes:

- **Mobile First**: Designed with mobile users in mind
- **Flexible Grid**: CSS Grid that adapts from 1 to 4 columns
- **Touch Friendly**: Appropriate touch targets for mobile devices
- **Optimized Images**: Responsive images that scale appropriately

## 🚀 Available Scripts

### Development
```bash
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint for code quality
```

### Production Deployment
```bash
npm run build        # Creates optimized production build in /dist
```

## 🔧 Environment Variables

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_TMDB_API_KEY` | The Movie Database API key | ✅ | `eyJhbGciOiJIUzI1NiJ9...` |
| `VITE_APPWRITE_PROJECT_ID` | Appwrite project identifier | ✅ | `64f8a9b2c1d2e3f4g5h6` |
| `VITE_APPWRITE_DATABASE_ID` | Appwrite database identifier | ✅ | `movie_catalog_db` |
| `VITE_APPWRITE_COLLECTION_ID` | Appwrite collection identifier | ✅ | `search_terms` |
| `VITE_APPWRITE_ENDPOINT` | Appwrite API endpoint | ✅ | `https://cloud.appwrite.io/v1` |

## 🔍 API Integration

### The Movie Database (TMDB)
- **Search Endpoint**: `/search/movie` for movie searches
- **Discover Endpoint**: `/discover/movie` for popular movies
- **Image CDN**: High-quality movie posters and backdrops
- **Rate Limiting**: Respectful API usage with proper error handling

### Appwrite Database
- **Search Analytics**: Tracks search frequency and popular terms
- **Real-time Updates**: Instant updates to trending searches
- **Scalable Storage**: Cloud-based data persistence

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure environment variables
4. Set up continuous deployment

### Manual Deployment
```bash
npm run build
# Upload the contents of /dist to your web server
```

## 🔧 Development

### Code Structure
- **Components**: Modular, reusable React components
- **Hooks**: Custom hooks for state management and side effects
- **API Layer**: Centralized API calls and error handling
- **Styling**: Utility-first CSS with Tailwind

### Best Practices
- **Component Composition**: Small, focused components
- **Error Boundaries**: Graceful error handling
- **Performance**: Debounced inputs and optimized re-renders
- **Accessibility**: ARIA labels and semantic HTML

### Adding New Features
1. Create new components in `/src/components/`
2. Add API functions to `appwrite.js` or create new API modules
3. Update styles in `index.css` using Tailwind utilities
4. Test thoroughly across different screen sizes

## 🐛 Troubleshooting

### Common Issues

**API Key Not Working**
- Verify your TMDB API key is correct
- Check that the key has proper permissions
- Ensure environment variables are properly set

**Appwrite Connection Issues**
- Verify all Appwrite credentials are correct
- Check that your database and collection exist
- Ensure proper permissions are set in Appwrite console

**Build Failures**
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors: `npm run lint`
- Verify all environment variables are set

**Styling Issues**
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS rules
- Verify custom theme variables are defined

## 📈 Performance Optimization

### Implemented Optimizations
- **Debounced Search**: Reduces API calls by 500ms delay
- **Image Optimization**: Responsive images with fallbacks
- **Code Splitting**: Vite automatically splits code for optimal loading
- **Caching**: Browser caching for static assets

### Further Optimizations
- Implement virtual scrolling for large movie lists
- Add service worker for offline functionality
- Use React.memo for expensive components
- Implement image lazy loading

## 🔒 Security

### Environment Variables
- Never commit `.env` files to version control
- Use different API keys for development and production
- Regularly rotate API keys

### API Security
- TMDB API key is exposed in frontend (normal for client-side apps)
- Appwrite handles authentication and authorization
- Implement rate limiting if needed

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow the existing code style
4. **Test thoroughly**: Ensure all features work correctly
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes clearly

### Development Guidelines
- Follow React best practices
- Use meaningful component and variable names
- Add comments for complex logic
- Ensure responsive design
- Test on multiple browsers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **The Movie Database (TMDB)** - For providing comprehensive movie data
- **Appwrite** - For backend-as-a-service platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Vite** - For the fast build tool and development server
- **React Team** - For the amazing React library

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](../../issues)
3. Create a new issue with detailed information
4. Join our community discussions

## 🔮 Future Enhancements

- **User Authentication**: Personal movie lists and favorites
- **Advanced Filtering**: Genre, year, rating filters
- **Movie Details Page**: Comprehensive movie information
- **Watchlist Feature**: Save movies to watch later
- **Social Features**: Share movies and reviews
- **Offline Support**: Service worker for offline browsing
- **Dark/Light Theme**: Toggle between themes
- **Internationalization**: Multi-language support

---

**Built with ❤️ using React, Vite, and modern web technologies**