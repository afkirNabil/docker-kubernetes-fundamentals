FROM node:19.4-alpine3.16
# Estas versiones de Linux, ya viene con el directorio /app para trabajar ahi con nuestra app.
# Ademas de las carpetas en raiz /usr /lib viene la de /app. Podemos crear las q nosotros queramos.

# Aqui forzamos la arquitectura de una imagen.
# FROM --platform=linux/amd64 node:19.4-alpine3.16
# FROM --platform=$BUILDPLATFORM node:19.4-alpine3.16



WORKDIR /app
# todos los directorios o paths relativos q añade van a estar en /app.
# cd app.

# /app/app.js 
# /app/package.json
COPY package.json ./

#en este caso queremos instalar las dependencias de node. Tanto las de DEV como las de PROD.
RUN npm install

# COPY app.js ./
# Copiar todo del working directory al destino.
# Esto se termina de configurar con el .dockerignore y borrando algunos de los ficheros o directorios q no necestiemos despues del build. Como los tests.
COPY . .

# Realizar el test suit
RUN npm run test

# Solucion parcial hasta q veamos multiple-stage build.
# Eliminar ficheros, directorios y dependencias no necesrios en PROD.
RUN rm -rf tests && rm -rf node_modules

# Como eliminamos todas las dependencias, volvemos a instalar solo las de PROD.
RUN npm install --prod

# para ejectuar comandos, en este caso el run
# esta ultima instruccion no se ejecuta en el build. solo al iniciar el contenedor
CMD [ "node", "app.js" ]