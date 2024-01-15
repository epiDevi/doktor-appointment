From node:alpine
WORKDIR /api
COPY . .
RUN npm i
ENV PORT 9999
EXPOSE ${PORT}
CMD [ "node","--watch","server.js" ]

