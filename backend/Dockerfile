# Use a Node.js Alpine base
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files first, install dependencies
COPY package*.json ./
RUN npm install

# Copy remaining source code
COPY . .

# Expose port 3001 (or whatever you use)
EXPOSE 3001

# Start the server
CMD ["npm", "start"]
