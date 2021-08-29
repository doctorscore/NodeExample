FROM node:16
WORKDIR /app
ADD . /app
RUN npm install
ENV NODE_ENV="production"
CMD [ "node", "server.js" ]
