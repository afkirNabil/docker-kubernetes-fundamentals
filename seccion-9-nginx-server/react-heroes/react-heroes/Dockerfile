
#! Creamos un stage unicamente para las dependencias de desarrollo.
# Frozen lockfile para las dependencias de desarrollo.
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

#! Fase del Builder. Y del test.
# En esta fase se copian las dependencias de desarrollo, el código fuente y se ejecutan los tests y el build.
# Aqui se crea la carpeta de distrubución, que es la que se va a copiar en la fase de producción.
FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

#! Fase de dependencias de produccion.
# Al ser una app de vite (react) no necestiamos las deps de prod cuando la app ya esta contruida. 
# FROM node:19-alpine3.15 as prod-deps
# WORKDIR /app
# COPY package.json package.json
# RUN yarn install --prod --frozen-lockfile
#? Se podria eliminar pero yo lo dejo para tener una referencia y notar la diferencia con otras imagenes que usan node o vite.

#! Fase de montar el servidor de produccion.
# Estos pasos varian. Si quisieramos montar un servidor de express, estos pasos si nos podrian valer pero en nuestro caso no.
# FROM node:19-alpine3.15 as prod
# EXPOSE 3000
# WORKDIR /app
# ENV APP_VERSION=${APP_VERSION}
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY --from=builder /app/dist ./dist
#? Se podria eliminar pero yo lo dejo para tener una referencia y notar la diferencia con otras imagenes que usan node o vite.

# CMD [ "node","dist/main.js"]

FROM nginx:1.28.2 as prod
EXPOSE 80
# no nos hace falta el work dir pq vamos a estar trabajando en dos rutas.
# no nos hace falta variables de entorno.
# copiamos el dist a la carpeta de nginx.
COPY --from=builder /app/dist /usr/share/nginx/html
COPY assets/ /usr/share/nginx/html/assets
# Copiamos nuestra config como el default.conf (reemplaza el existente)
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Montar y correr la app.
CMD [ "nginx", "-g", "daemon off;"]
# investigar que hacen los otros dos argumentos









