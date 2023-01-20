#Specify a base image
FROM node:alpine

#Specify a working directory
WORKDIR /usr/app

#Copy the dependencies file
COPY ./package.json ./

#Install dependencies
RUN npm install 
RUN npm install pm2 -g
#Copy remaining files
COPY ./ ./

EXPOSE 8085
#Default command
CMD ["pm2-runtime", "app.js", "--watch"]