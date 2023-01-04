# Stage 1
FROM node:16.14-alpine as build-step

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /app/dist/fiber-frontend /usr/share/nginx/html


# docker run --name {{container-name}} -p 8000:80 fiber 