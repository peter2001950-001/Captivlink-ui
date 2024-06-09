FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY ./dist/contact-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./dist/contact-app/assets /usr/share/nginx/html/assets
COPY ./dist/contact-app/config /usr/share/nginx/html/config
# COPY ./dist/bprint/images /usr/share/nginx/html/images

ENTRYPOINT [ "/bin/bash",  "-c", "envsubst < /usr/share/nginx/html/config/appConfig.template.json > /usr/share/nginx/html/config/appConfig.json && exec nginx -g 'daemon off;'"]

EXPOSE 80
