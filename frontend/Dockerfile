# Stage 1: Build the React app
FROM node:16 AS build

# Set the working directory
WORKDIR /app/frontend

# Copy package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Build the React app
RUN npm run build

# # Stage 2: Serve the app with a lightweight web server
# FROM nginx:alpine

# # Copy the build folder from the previous stage to the nginx HTML folder
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80
# EXPOSE 3000

# # Start nginx
# CMD ["nginx", "-g", "daemon off;"]
