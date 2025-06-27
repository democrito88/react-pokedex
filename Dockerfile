FROM node:18-alpine AS build
WORKDIR /var/www/html
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]