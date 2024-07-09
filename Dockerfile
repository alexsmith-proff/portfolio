FROM node:18

RUN mkdir /frontend

WORKDIR /frontend

COPY ./package.json /frontend/

RUN npm install

RUN npm install next

COPY . /frontend/

RUN npm run build

CMD ["npm", "start"]