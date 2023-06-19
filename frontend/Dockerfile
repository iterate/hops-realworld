# syntax = docker/dockerfile:1.4

FROM node:18-alpine AS builder

ENV YARN_CACHE_FOLDER /var/cache/frontend/yarn
COPY ./frontend /opt/frontend


# Install dependencies
RUN --mount=type=cache,id=frontend_v1,target=/var/cache/frontend/yarn \
    yarn  \
      --cwd /opt/frontend \
      --prefer-offline \
    install  \
      --frozen-lockfile \
      --no-progress

# Build the Svelte app
RUN yarn \
      --cwd /opt/frontend \
      --production \
      --offline \
      --cwd /opt/frontend \
    run build

# Remove development dependencies
RUN --mount=type=cache,id=frontend_v1,target=/var/cache/frontend/yarn \
    yarn \
      --cwd /opt/frontend \
      --production \
      --prefer-offline \
    install \
      --frozen-lockfile


FROM gcr.io/distroless/nodejs18-debian11:nonroot AS runner

ENV NODE_ENV "production"
ENV PORT "3000"
WORKDIR "/var/lib/frontend/"

COPY --from=builder /opt/frontend/build /var/lib/frontend/build
COPY --from=builder /opt/frontend/node_modules /var/lib/frontend/node_modules
COPY --from=builder /opt/frontend/package.json /var/lib/frontend/package.json

CMD ["/var/lib/frontend/build/index.js"]
