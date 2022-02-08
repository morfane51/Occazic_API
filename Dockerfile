FROM node:16

WORKDIR /app/occazic_api

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

