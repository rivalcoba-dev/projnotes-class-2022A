FROM node:14.16.1
WORKDIR /projnotes-2022a
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","run","dev"]