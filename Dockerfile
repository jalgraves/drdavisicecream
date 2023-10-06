FROM node:18.16.0-buster-slim AS build

RUN apt-get update  && \
    apt-get install -y \
        apt-utils \
        python \
        g++ \
        make \
        gcc

FROM build AS install
ARG git_hash
ARG google_api_key
ARG node_env
ARG version
ENV GIT_HASH=${git_hash}
ENV NODE_ENV=${node_env}
ENV GOOGLE_API_KEY=${google_api_key}
ENV VERSION=${version}

COPY ./package* /app/
COPY ./.npmrc /app/
WORKDIR /app
RUN npm ci --save-dev --production=false
COPY . ./

RUN npx webpack --config webpack.config.js && \
    rm -rf node_modules

FROM node:18.16.0-buster-slim
ARG node_env
ENV NODE_ENV=${node_env}
ENV VERSION=${version}
ENV TINI_VERSION v0.19.0

COPY ./package* /app/
COPY ./.npmrc /app/
WORKDIR /app
RUN npm ci --production || npm ci --production
COPY . ./
COPY --from=install /app/dist/public/js/main.js /app/dist/public/js/
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "-s", "--"]

USER node
CMD ["npm", "run", "start"]
