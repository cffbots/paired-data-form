FROM node as builder

LABEL maintainer="s.verhoeven@esciencecenter.nl"

COPY . /code/

RUN cd /code && npm install && npm run build

FROM nginx:alpine

COPY --from=builder /code/build /usr/share/nginx/html

COPY dockerfiles/nginx.default.conf /etc/nginx/conf.d/default.conf

# Location of json documents / db root
RUN mkdir /data
