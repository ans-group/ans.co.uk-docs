FROM node:24-alpine AS builder

WORKDIR /app
COPY . /app
RUN yarn && yarn build

FROM nginx:stable

COPY --from=builder /app/build /usr/share/nginx/docs.ans.co.uk/html
COPY /.docker/nginx.conf /etc/nginx/nginx.conf