FROM node:8.11.3-alpine

WORKDIR /app

ADD . /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm","start"]