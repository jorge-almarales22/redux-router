FROM node:19.2-alpine3.16 as dev-deps
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:1.23.3 as prod
EXPOSE 80
COPY --from=dev-deps /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

CMD [ "nginx","-g", "daemon off;" ]