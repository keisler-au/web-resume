# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /frontend-app
COPY package.json package-lock.json ./
RUN npm install
# Copy the rest of the app's source code
COPY . .
# Build the React app
RUN npm run build


FROM build AS development
EXPOSE 3000
CMD ["npm", "start"]


FROM nginx:alpine as production
# Copy the build folder from the previous stage to the nginx HTML folder
COPY --from=build /frontend-app/build /usr/share/nginx/html
EXPOSE 80