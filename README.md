# PEACEOUT - The Better Streaming Platform ✌️

PeaceOut is a peaceful, energetic platform for streaming, video sharing, and live interaction. Create content, discover videos, and connect with others in a positive environment.

## 🚀 Quick Deploy (No Render Required!)

This project is ready for deployment on multiple platforms. Choose your preferred option:

### Frontend (GitHub Pages - Already Configured)
The frontend is automatically deployed via GitHub Actions to GitHub Pages.

### Backend Options

#### Option 1: Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

#### Option 2: Railway
1. Connect repository at [railway.app](https://railway.app)
2. Deploy automatically using `railway.toml`

#### Option 3: Heroku
```bash
git push heroku main
```

#### Option 4: Docker
```bash
docker build -t peaceout .
docker run -p 4000:4000 peaceout
```

#### Option 5: Netlify
```bash
# Connect repo to Netlify - uses netlify.toml
```

## 📋 Features

- 🎥 **Video Upload & Streaming** - Share your content with transcoding support
- 🏠 **3D Plaza** - Interactive virtual space with WebGL
- 👤 **User Profiles** - Customizable themes and avatars
- 🔍 **Discovery** - Search videos and users
- 💬 **Comments & Reactions** - Engage with content
- 🎨 **Themes** - Peaceful, Energetic, Classic, and Night modes
- 📱 **Responsive Design** - Works on all devices

## 🛠️ Development Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Frontend Setup
```bash
npm install
npm run dev
```

## 🌐 Deployment Configuration

### Setting Custom Backend URL
1. Edit `deployment-config.js`
2. Uncomment and set your backend URL:
```javascript
window.PEACEOUT_BACKEND_URL = 'https://your-backend.vercel.app/api/';
```

### Environment Variables (Backend)
Required:
- `SESSION_SECRET` - Session encryption key
- `E2_KEY` - S3 storage access key  
- `E2_SECRET` - S3 storage secret
- `E2_ENDPOINT` - S3 storage endpoint
- `E2_REGION` - Storage region

Optional:
- `PORT` - Server port (default: 4000)
- `NODE_ENV` - Environment mode

## 📚 Documentation

- [**Deployment Guide**](DEPLOYMENT.md) - Detailed deployment instructions
- [**Deployment Status**](deployment-status.html) - Check your deployment status
- [**API Documentation**](backend/src/index.js) - Backend API reference

## 🧪 Testing

```bash
# Test backend deployment readiness
./test-deployment.sh

# Build frontend
npm run build

# Test with local backend
cd backend && npm start
```

## 🎯 Project Structure

```
PeaceOut/
├── backend/           # Node.js API server
├── shared/           # Shared assets and scripts
├── dist/             # Built frontend (auto-generated)
├── *.html            # Frontend pages
├── deployment-config.js  # Backend URL configuration
├── vercel.json       # Vercel deployment config
├── railway.toml      # Railway deployment config
├── netlify.toml      # Netlify deployment config
├── Dockerfile        # Docker deployment config
└── DEPLOYMENT.md     # Detailed deployment guide
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with `./test-deployment.sh`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- 📖 Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment help
- 🔧 Use [deployment-status.html](deployment-status.html) to diagnose issues
- 🐛 Open an issue for bugs or feature requests

---

**Ready to deploy?** See [DEPLOYMENT.md](DEPLOYMENT.md) for platform-specific instructions!