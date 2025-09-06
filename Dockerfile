# Use Node.js 22.12.* as the base image
FROM node:22.12.0-alpine

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the Next.js application is only for prod
# RUN pnpm run build

# Expose port 3000 (Next.js default)
EXPOSE 3000

# Start the application is only for prod
# CMD ["pnpm", "start"]
CMD ["pnpm", "dev"]
