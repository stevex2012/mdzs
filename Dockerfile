FROM node:10.15.3-alpine

WORKDIR /app
COPY package.json /app/package.json
COPY ./components/. /app/components
COPY ./config/. /app/config
COPY ./pages/. /app/pages
COPY ./static/. /app/static
COPY .babelrc /app/.babelrc
COPY next.config.js /app/next.config.js

RUN npm install && npm run build && npm install pm2 -g && rm -rf /app/node_modules/ 

EXPOSE 3000


