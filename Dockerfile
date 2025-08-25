FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy backend package files
COPY backend/package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy backend source code
COPY backend/src ./src

# Create directory for database
RUN mkdir -p /app/data

# Expose port
EXPOSE 4000

# Set environment variables
ENV NODE_ENV=production
ENV DATABASE_PATH=/app/data/peaceout.db

# Start the server
CMD ["node", "src/index.js"]