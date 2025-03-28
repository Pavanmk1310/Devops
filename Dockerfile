# Use Node.js as the base image
FROM node:18-alpine AS build  

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first (better caching)
COPY package*.json ./  

# Install dependencies (try different approaches if it fails)
RUN npm install --legacy-peer-deps || npm install --force  

# Copy all project files
COPY . .  

# Build the Vite React app
RUN npm run build  

# Serve the app using Nginx
FROM nginx:alpine  
COPY --from=build /app/dist /usr/share/nginx/html  
EXPOSE 80  
CMD ["nginx", "-g", "daemon off;"]
