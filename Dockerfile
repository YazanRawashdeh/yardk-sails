FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install sails nodemon -g

RUN npm install

COPY . .

# ENV port=8080

# EXPOSE 8080

# CMD ["node","app.js"]
# CMD [ "sails", "lift" ]
# CMD ["nodemon","sails","lift","--redis"]
# CMD ["npm","start"]
CMD ["nodemon","app.js"] 
# use this maybe? https://www.npmjs.com/package/chokidar