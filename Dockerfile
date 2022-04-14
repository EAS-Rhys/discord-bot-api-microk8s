FROM node:17.9.0-alpine3.15

WORKDIR /usr/src/app

COPY src/ ./

RUN npm install

CMD [ "npm", "start"]