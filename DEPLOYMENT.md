# PeaceOut Deployment Guide

This guide covers multiple deployment options for the PeaceOut video platform, allowing you to deploy both frontend and backend without relying on Render.

## Architecture Overview

- **Frontend**: Static React/HTML5 application that can be deployed to any static hosting service
- **Backend**: Node.js Express API with SQLite database and S3-compatible storage

## Quick Deployment Options

### Option 1: Vercel (Recommended for beginners)

#### Backend Deployment:
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to the project root
3. Run `vercel` and follow the prompts
4. The `vercel.json` configuration will automatically deploy the backend

#### Frontend Deployment:
1. Build the frontend: `npm run build`
2. Deploy the `dist` folder to Vercel or keep using GitHub Pages
3. Update `deployment-config.js` with your Vercel backend URL

### Option 2: Railway

#### Backend Deployment:
1. Create account at [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Select the backend folder as the root
4. Railway will automatically detect and deploy the Node.js application

#### Frontend:
- Can continue using GitHub Pages or deploy to Railway as well

### Option 3: Netlify

#### Full-Stack Deployment:
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. The `netlify.toml` will handle both frontend and backend deployment

### Option 4: Docker (Self-hosted or any container platform)

#### Using Docker Compose:
```bash
# Build and run the backend
docker-compose up -d
```

#### Manual Docker deployment:
```bash
# Build the image
docker build -t peaceout-backend .

# Run the container
docker run -d -p 4000:4000 \
  -e NODE_ENV=production \
  -e SESSION_SECRET=your-secret-here \
  -e E2_KEY=your-key \
  -e E2_SECRET=your-secret \
  -e E2_ENDPOINT=your-endpoint \
  -e E2_REGION=your-region \
  peaceout-backend
```

### Option 5: GitHub Pages + Separate Backend

1. **Frontend**: Already configured with GitHub Pages (using `.github/workflows/static.yml`)
2. **Backend**: Deploy to any platform (Vercel, Railway, Heroku, etc.)
3. **Configuration**: Update `deployment-config.js` with your backend URL

## Environment Variables

### Required for Backend:
- `SESSION_SECRET`: Secret key for session management
- `E2_KEY`: S3-compatible storage access key
- `E2_SECRET`: S3-compatible storage secret key
- `E2_ENDPOINT`: S3-compatible storage endpoint
- `E2_REGION`: Storage region

### Optional:
- `PORT`: Server port (defaults to 4000)
- `NODE_ENV`: Environment (production/development)
- `DATABASE_PATH`: SQLite database file path

## Frontend Configuration

The frontend automatically detects the deployment platform and configures the API endpoint accordingly. For custom configurations:

1. Edit `deployment-config.js`
2. Uncomment and set `window.PEACEOUT_BACKEND_URL` to your backend URL
3. Include this file in your HTML pages before the api-config.js script

Example:
```html
<script src="deployment-config.js"></script>
<script src="shared/js/api-config.js"></script>
```

## Testing Your Deployment

1. **Backend Health Check**: Visit `https://your-backend-url/api/health` (if implemented)
2. **Frontend**: Navigate to your frontend URL and test login/video upload
3. **CORS**: Ensure backend allows requests from your frontend domain

## Platform-Specific Notes

### Vercel
- Functions have 30-second timeout limit
- File system is read-only except `/tmp`
- SQLite database will be reset on each deployment (consider upgrading to PostgreSQL)

### Railway
- Persistent disk storage available
- Good for SQLite databases
- Simple deployment process

### Netlify
- Functions have execution time limits
- Good for serverless approach
- May require function restructuring for complex endpoints

### Docker/Self-hosted
- Full control over environment
- Persistent storage available
- Requires server management

## Upgrading from Render

1. Choose your new deployment platform
2. Deploy the backend using one of the methods above
3. Update the frontend configuration if needed
4. Update any hardcoded URLs in your application
5. Test thoroughly before switching DNS/domains

## Troubleshooting

### CORS Issues
- Ensure backend includes your frontend domain in CORS origins
- Check that credentials are properly configured

### Database Issues
- For platforms without persistent storage, consider migrating to PostgreSQL
- Ensure database file permissions are correct for self-hosted deployments

### Session Issues
- Make sure SESSION_SECRET is set consistently
- Check cookie security settings for HTTPS deployments

## Support

For deployment-specific issues, consult the documentation for your chosen platform:
- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app/)
- [Netlify Documentation](https://docs.netlify.com/)