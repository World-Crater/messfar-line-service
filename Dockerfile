FROM node:19-alpine3.16

WORKDIR /messfar-line-service

COPY . /messfar-line-service

# RUN npm install

ENTRYPOINT ["npm", "start"]