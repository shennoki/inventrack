FROM node:18.19.0-slim
WORKDIR /app
COPY ../ /app
RUN apt-get update -y && apt-get install -y openssl
RUN npm install
EXPOSE 8000
