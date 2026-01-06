
docker container run `
--name nest-app `
-w /app `
-p 3000:3000 `
-v "$(pwd)":/app `
node:16-alpine3.16 `
sh -c "yarn install && yarn start:dev"

<!-- El anteriro no me funciono por el pwd -->
docker container run `
--name nest-app `
-w /app `
-p 3000:3000 `
-v "${PWD}:/app" `
node:16-alpine3.16 `
sh -c "yarn install && yarn start:dev"

<!-- Ahora es la versin de node, esta app quiere la 18 pero estaba usndo la 16 -->
docker container run `
--name nest-app `
-w /app `
-dp 3000:3000 `
-v "${PWD}:/app" `
node:18-alpine3.16 `
sh -c "yarn install && yarn start:dev"

<!-- Explicacion comando: -->
-w /app -> Es mi mismo que hacer dentro del contenedor "cd app".
Esta app expone por defecto el puerto 3000.
-v "$(pwd)":/app -> Hace el puente entre el filesystem del host con el del contenedor.
sh -c "" -> Le indicamos que nada mas levante el contenedor e instale todo lo necesario. Que ejecute esos comandos. X defecto esa imagen de node se arranca, instala lo necesario y se apaga.
Que use yarn tiene q ver con la version de linux pq no es ubuntu sino alpine. O es lo mismo q el node pero de otra manera. Mirarlo bien

<!--  -->