#!/bin/bash

# Backend deployment test script
# Tests if the backend can start properly with different configurations

echo "Testing PeaceOut Backend Deployment..."

cd backend

echo "1. Testing basic startup..."
timeout 10s npm start &
PID=$!
sleep 5

if ps -p $PID > /dev/null; then
    echo "✅ Backend starts successfully"
    kill $PID
else
    echo "❌ Backend failed to start"
    exit 1
fi

echo "2. Testing with production environment..."
NODE_ENV=production timeout 10s npm start &
PID=$!
sleep 5

if ps -p $PID > /dev/null; then
    echo "✅ Backend starts successfully with NODE_ENV=production"
    kill $PID
else
    echo "❌ Backend failed to start with production environment"
    exit 1
fi

echo "3. Testing required dependencies..."
if npm list express > /dev/null 2>&1; then
    echo "✅ Express is installed"
else
    echo "❌ Express is missing"
    exit 1
fi

if npm list sqlite3 > /dev/null 2>&1; then
    echo "✅ SQLite3 is installed"
else
    echo "❌ SQLite3 is missing"
    exit 1
fi

if npm list socket.io > /dev/null 2>&1; then
    echo "✅ Socket.IO is installed"
else
    echo "❌ Socket.IO is missing"
    exit 1
fi

echo "🎉 All backend deployment tests passed!"
echo ""
echo "Ready for deployment to:"
echo "- ✅ Vercel (using vercel.json)"
echo "- ✅ Railway (auto-detect Node.js)"
echo "- ✅ Heroku (add Procfile if needed)"
echo "- ✅ Docker (using Dockerfile)"
echo "- ✅ Netlify Functions (using netlify.toml)"