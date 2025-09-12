# Use Node.js 22.12.* as the base image
FROM node:22.12.0-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application is only for prod
# RUN npm run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the application is only for prod
# CMD ["npm", "run", "start"]
CMD ["npm", "run", "registry"]
