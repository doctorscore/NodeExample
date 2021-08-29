FROM node:16

WORKDIR /app

ADD . /app

RUN npm install

RUN export DEV_APP_PORT=8080

CMD [ "node", "server.js" ]
