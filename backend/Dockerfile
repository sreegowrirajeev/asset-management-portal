FROM node:22

ENV HTTP_PROXY=http://192.168.56.104:3128

ENV HTTPS_PROXY=http://192.168.56.104:3128

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node","server.js"]
