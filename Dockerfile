FROM node:16

WORKDIR /usr/local/occazic_api

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

RUN cat db/config/db.config.js

CMD ["npm", "start"]

