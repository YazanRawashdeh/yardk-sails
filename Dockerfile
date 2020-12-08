FROM node:12

WORKDIR /usr/app

COPY package*.json ./

RUN npm install sails nodemon -g

RUN npm install
# && mv node_modules ../

COPY . .

# ENV port=8080

# EXPOSE 8080

# CMD ["node","app.js"]
# CMD [ "sails", "lift" ]
CMD ["nodemon","app.js"] 
# use this maybe? https://www.npmjs.com/package/chokidar