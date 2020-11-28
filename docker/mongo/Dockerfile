FROM alpine:3.6

RUN apk add --no-cache mongodb

# VOLUME /data/db
EXPOSE 27017 28017

ADD ./run.sh /scripts/run.sh
RUN chmod +x /scripts/*

# ENTRYPOINT [ "/scripts/run.sh" ]

CMD [ "mongod", "--bind_ip", "0.0.0.0" ]
