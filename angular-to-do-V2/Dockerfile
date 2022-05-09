FROM node:16-alpine as node

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "start"]



# FROM node:16-alpine AS build
# WORKDIR /usr/src/app
# COPY package.json package-lock.json ./
# RUN npm install
# COPY . .
# RUN npm run build
# ### STAGE 2: Run ###
# FROM nginx:1.17.1-alpine
# COPY nginx/default.conf /etc/nginx/nginx.conf
# COPY --from=build /usr/src/app/dist/angular-to-do-V2 /usr/share/nginx/html



# FROM node:12-alpine as build

# WORKDIR /app
# COPY package* ./
# RUN npm install

# COPY angular.json ./

# COPY ./src ./src

# ARG MODE=production

# RUN npm run build -- --configuration=$MODE

# FROM nginx:stable-alpine
# WORKDIR /usr/share/nginx/app
# COPY --from=build /app/dist/smt .
# COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
