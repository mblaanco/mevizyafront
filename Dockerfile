# MAINTAINER Murilo Blanco Flor <muriloblan@gmail.com>
FROM node:latest

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

#RUN git clone https://github.com/vishnubob/wait-for-it.git

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD [ "npm", "start" ]
