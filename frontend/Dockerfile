FROM node:20.5.0-slim AS build
WORKDIR /frontend-app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 3000
RUN npm run build


FROM build AS development
COPY --from=build /frontend-app/build /usr/share/nginx/html
CMD ["npm", "start"]


FROM nginx:alpine AS production
COPY --from=build /frontend-app/build /usr/share/nginx/html
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
