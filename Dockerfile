FROM node:18-alpine3.19 as angular

LABEL authors="KZamael"

WORKDIR /app

COPY . .
RUN npm install
RUN npm run build

FROM billcoding/alpine3.18

WORKDIR /user/local/apache2/htdocs
COPY --from=angular /app/dist/flight-app .
