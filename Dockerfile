FROM node:14-alpine

ENV MONGO_DB_USERNAME=abhishek \
    MONGO_DB_PWD=happysoul

RUN mkdir -p /home/node-app

COPY ./app /home/node-app

CMD ["node", "/home/node-app/index.js"]