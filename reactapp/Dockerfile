# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

# Copy package files and install dependencies using npm
COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build

# Step 2: Serve the React app with NGINX
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
