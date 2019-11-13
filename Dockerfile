FROM node:13.1.0-alpine

WORKDIR /app

COPY yarn.lock .
COPY package.json .
COPY .babelrc .

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh python make g++

RUN yarn

COPY src ./src

RUN yarn build

EXPOSE 3000

CMD ["node","build/main.js"]