FROM node:16

WORKDIR /app

ADD . /app

RUN npm install

CMD [ "node", "server.js" ]

EXPOSE 3000 80 8080
