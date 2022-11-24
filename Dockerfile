FROM node:16-alpine
WORKDIR /app
EXPOSE 3000
COPY . .
RUN yarn
RUN yarn build
ENTRYPOINT yarn start