FROM node:18-alpine as builder
WORKDIR /usr/src/app
COPY package*.json /usr/src/app/
RUN npm i --production-only
COPY . /usr/src/app/
RUN npm run build

FROM node:18-alpine as appcontainer

WORKDIR /usr/src/app
ARG port
ARG secret
ARG user
ARG password
ARG expiration

ENV PORT = $port
ENV JWT_SECRET_KEY=$secret
ENV ALLOWED_USER=$user
ENV ALLOWED_USER_PASSWORD=$password
ENV JWT_EXPIRATION_TIME=$expiration

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE $port
CMD ["node", "dist/main.js"]

