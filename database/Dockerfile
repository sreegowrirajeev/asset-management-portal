FROM mysql:8
ENV HTTP_PROXY=http://192.168.56.104:3128
ENV HTTPS_PROXY=http://192.168.56.104:3128
COPY init.sql /docker-entrypoint-initdb.d/

