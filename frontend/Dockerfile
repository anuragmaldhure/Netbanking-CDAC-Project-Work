# Use an amd64-compatible base image
FROM --platform=linux/amd64 ubuntu:22.04

FROM node:17-alpine3.15

#Copy from host machine/source - first . path is relative to docker file, second is relative to root on container
#COPY source dest
# COPY . . 

COPY package.json package-lock.json

RUN npm install -g npm@8.11.0

COPY . . 

# RUN npm run build

#cmd -c npm start
CMD [ "npm", "start" ]

