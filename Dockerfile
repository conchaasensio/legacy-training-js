FROM node:15.6-alpine3.12

RUN apk update && apk add make && rm -rf /var/cache/apk/*

WORKDIR /tmp
ADD tennis-refactoring-kata/package.json .
ADD tennis-refactoring-kata/package-lock.json .
RUN npm install
RUN rm package.json package-lock.json
RUN mv ./node_modules /node_modules
ENV PATH /node_modules/.bin:$PATH

USER node
WORKDIR /kata
RUN npm config set update-notifier false

