FROM mhart/alpine-node:8

WORKDIR /app
COPY . .

ENV NODE_ENV="production"
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start"]