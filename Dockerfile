FROM nginx

COPY static/index.html /data/www/index.html

COPY nginx.conf /etc/nginx/nginx.conf

RUN nginx
