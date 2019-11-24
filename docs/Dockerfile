FROM node:alpine as build
RUN npm install -g vuepress http-server
WORKDIR /app
COPY . /app
RUN vuepress build

FROM nginx:alpine
COPY --from=build /app/.vuepress/dist /usr/share/nginx/html/
