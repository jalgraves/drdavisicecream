FROM node:14.17.6-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG google_api_key
ARG node_env
ENV NODE_ENV=${node_env}
ENV GOOGLE_API_KEY=${google_api_key}

COPY ./package* /app/
WORKDIR /app
RUN npm ci --save-dev
COPY . ./

RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:14.17.6-buster-slim

ENV TINI_VERSION v0.19.0

COPY ./package* /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]
EXPOSE 3034
USER node
CMD ["npm", "run", "start"]
