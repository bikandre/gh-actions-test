# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock if you're using yarn)
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the application code
COPY . ./

# Build the React app
RUN npm run build

# Step 2: Serve the React app with NGINX
FROM nginx:alpine

# Copy the build folder contents to NGINX
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for NGINX
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
