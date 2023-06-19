# syntax = docker/dockerfile:1.4
FROM rust:1.70.0-slim-bullseye AS builder

# Ensure readable output
ENV CARGO_TERM_COLOR "never"
ENV CARGO_TERM_PROGRESS_WHEN "never"
ENV TERM "dumb"
# For consistency and predictability
ENV CARGO_HOME "/var/cache/realworld/cargo"
ENV SQLX_OFFLINE true
ENV CARGO_BUILD_RUSTFLAGS "-C link-arg=-fuse-ld=lld"
# Cheaper crate downloads
ENV CARGO_REGISTRIES_CRATES_IO_PROTOCOL "sparse"

# Tools needed for our Rust builds
RUN apt-get --yes update && apt-get --yes install \
        libclang-dev \
        libssl-dev \
        lld \
        make \
        perl \
        pkg-config \
        protobuf-compiler

WORKDIR /usr/local/src/realworld
COPY ./backend /usr/local/src/realworld
RUN --mount=type=cache,id=v1_realworld,target=/var/cache/realworld/cargo/bin/ \
    --mount=type=cache,id=v1_realworld,target=/var/cache/realworld/cargo/registry/index/ \
    --mount=type=cache,id=v1_realworld,target=/var/cache/realworld/cargo/registry/cache/ \
    --mount=type=cache,id=v1_realworld,target=/var/cache/realworld/cargo/git/db/ \
    --mount=type=cache,id=v1_realworld,target=/build/release \
    cargo build \
        --release \
        --target-dir /build \
        --bin realworld-axum-sqlx \
    && cp /build/release/realworld-axum-sqlx /usr/local/bin/realworld

FROM debian:bullseye-slim AS release

RUN apt-get --yes update && apt-get --yes install \
    ca-certificates \
    libssl1.1

WORKDIR /realworld
COPY --from=builder /usr/local/bin/realworld .

RUN useradd -ms /bin/bash realworld
USER realworld

CMD ["/realworld/realworld"]
EXPOSE 3090
