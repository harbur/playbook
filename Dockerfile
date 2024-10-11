FROM node:alpine AS build

WORKDIR /app
ENV NODE_OPTIONS=--openssl-legacy-provider

COPY package.json yarn.lock /app/
RUN yarn

COPY . /app
RUN yarn build

FROM nginx:alpine
EXPOSE 80
COPY --from=build /app/docs/.vuepress/dist /usr/share/nginx/html/
