FROM node:17-alpine

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /tmp
ADD ./package*.json ./
RUN npm install
RUN mv ./node_modules /node_modules
ENV PATH /node_modules/.bin:$PATH

USER node
WORKDIR /kata
RUN npm config set update-notifier false

