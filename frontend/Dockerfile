# ---- Stage 1: Build the React app ----
  FROM node:18-alpine as builder

  WORKDIR /app
  COPY package*.json ./
  RUN npm install
  COPY . .
  
  # Build the production bundle
  RUN npm run build
  
  # ---- Stage 2: Nginx + Custom Config ----
  FROM nginx:alpine
  
  # Copy our custom Nginx config into the container
  COPY nginx.conf /etc/nginx/nginx.conf
  
  # Copy the React build output from "builder" stage into /usr/share/nginx/html
  COPY --from=builder /app/build /usr/share/nginx/html
  
  EXPOSE 80
  CMD ["nginx", "-g", "daemon off;"]
  
