FROM node:20.5.0-slim AS build

WORKDIR /frontend-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build


FROM build AS development
COPY --from=build /frontend-app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["npm", "start"]


FROM nginx:alpine as production
COPY --from=build /frontend-app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
