FROM node:17-alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /kata

ADD ./package*.json ./
RUN npm install

USER node
RUN npm config set update-notifier false

VOLUME ["/kata", "/kata/node_modules"]

