FROM node:16 AS build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

EXPOSE 5000

CMD ["node", "src/app.js"]
